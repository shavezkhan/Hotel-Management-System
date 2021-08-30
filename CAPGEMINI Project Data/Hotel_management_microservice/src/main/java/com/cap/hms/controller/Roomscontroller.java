package com.cap.hms.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.cap.hms.repository.*;
import com.cap.hms.service.RoomsService;
import com.cap.hms.entity.*;

@SuppressWarnings("unused")
@RestController
@RequestMapping("/roomapi")
@CrossOrigin
@Controller
public class Roomscontroller {
	
	@Autowired
	RoomsService roomsService;
	
	@PostMapping("/newRoom")
	public Rooms addRoom(@RequestBody Rooms room){
		return roomsService.addRoom(room);
	}
	
	@GetMapping("/findAllRooms")
	public List<Rooms> getAll(){
		return roomsService.getAll();
	}
		
	@PutMapping("/updateRoom/{roomNum}")
	public Rooms update(@RequestBody Rooms roomNum)
	{
		return roomsService.update(roomNum);
	}
	
	@DeleteMapping("/deleteRoom/{roomNum}")
	public void delete(Rooms roomNum){
		roomsService.delete(roomNum);
	}
	
	@GetMapping("/roomstatus/{roomStatus}")
	public List<Rooms> findByRoomStatus(@PathVariable String roomStatus){
		return roomsService.findByRoomStatus(roomStatus);
	}	
	
	@GetMapping("/roomtype/{roomType}")
	public List<Rooms> getRoomType(@PathVariable String roomType){
		return roomsService.getRoomType(roomType);
	}
	
	@GetMapping("/roomview/{roomFeatures}")
	public List<Rooms> getRoomView(@PathVariable String roomFeatures){
		return roomsService.getRoomView(roomFeatures);
	}

}
