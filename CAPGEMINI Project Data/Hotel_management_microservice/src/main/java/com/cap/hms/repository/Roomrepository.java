package com.cap.hms.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.cap.hms.entity.Rooms;

@Repository
public interface Roomrepository extends MongoRepository<Rooms, Integer> {
	
	@Query("{'roomFeatures':?0}")
	List<Rooms> findByRoomView(String roomFeatures);
	
	@Query("{'roomStatus':?0}")
	List<Rooms> findByRoomStatus(String roomFeatures);

	@Query("{'roomType':?0}")
	List<Rooms> findByRoomType(String roomType);

}
