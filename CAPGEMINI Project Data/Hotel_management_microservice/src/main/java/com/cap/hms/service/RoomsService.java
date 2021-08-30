package com.cap.hms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.cap.hms.entity.Rooms;
import com.cap.hms.repository.Roomrepository;

@Service
public class RoomsService {
	
	@Autowired
	Roomrepository roomrepository;

	public List<Rooms> getAll() {
		return roomrepository.findAll();
	}

	public Rooms addRoom(Rooms room) {
		return roomrepository.insert(room);	
	}

	public Rooms update(Rooms roomNum) {
		return roomrepository.save(roomNum);
	}

	public void delete(Rooms roomNum) {
		roomrepository.delete(roomNum);
	}

	public List<Rooms> getAllByExample(Rooms room) {
		Example<Rooms> e = Example.of(room);
		return roomrepository.findAll(e);
	}

	public List<Rooms> getRoomType(String roomType) {
		return roomrepository.findByRoomType(roomType);
	}

	public List<Rooms> getRoomView(String roomFeatures) {
		return roomrepository.findByRoomView(roomFeatures);
	}

	public List<Rooms> findByRoomStatus(String roomStatus) {
		return roomrepository.findByRoomStatus(roomStatus);

	}

	
	
}
