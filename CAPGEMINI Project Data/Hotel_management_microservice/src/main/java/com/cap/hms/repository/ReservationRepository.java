package com.cap.hms.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cap.hms.entity.Reservation;
@Repository
public interface ReservationRepository extends MongoRepository<Reservation, Integer> {
	

}
