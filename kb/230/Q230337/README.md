---
layout: page
title: "Q230337: MCSE Readiness Review - Exam 70-058: Networking Essentials Comme"
permalink: /kb/230/Q230337/
---

## Q230337: MCSE Readiness Review - Exam 70-058: Networking Essentials Comme

{% raw %}

	Article: Q230337
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 22-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS MCSE Readiness Review Exam 70-058 Networking Essentials ISBN 0-7356-0536-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book "MCSE Readiness Review - Exam 70-058:
	Networking Essentials," ISBN 0-7356-0536-x.
	
	Contents:
	
	- Page 12: Answers For Question 70-058.01.01.005 Are Incorrect
	
	- Pages 217 - 218: Answer For Question 70-058.03.01.005 Incorrect
	
	- Pages 219 - 220: Question 70-058.03.01.006 Answer Should Be D
	
	- Pages 231 and 232: Unclear Question and Text Correction
	
	- Pages 311 and 312: Bad Question
	
	- Page 367: Description of Gateway Incorrect
	
	- False Error Message: Tests Have Expired
	
	MORE INFORMATION
	================
	
	Page 12, Answers For Question 70-058.01.01.005 Are Incorrect
	------------------------------------------------------------
	
	On page 12, there are two errors.
	
	Change:
	"Correct Answers: A and B"
	
	To:
	"Correct Answers: A, B, and D"
	
	Also change:
	"D. Incorrect: Demand Priority does not use the contention method because
	computers do not compete for a chance to send on the network. Demand Priority
	uses a round-robin polling scheme to scan ports for incoming data, and then
	prioritizes the requests. Therefore this access method does not produce any
	contention or network collisions."
	
	To:
	"D. Correct: As in CSMA/CD, two computers using the demand-priority access method
	can cause contention by transmitting at exactly the same time. However, with
	demand priority, it is possible to implement a scheme in which certain types of
	data will be given priority if there is contention. If the hub or repeater
	receives two requests at the same time, the highest priority request is serviced
	first. If the two requests are of the same priority, both requests are serviced
	by alternating between the two."
	
	
	Pages 217 - 218: Answer For Question 70-058.03.01.005 Incorrect
	---------------------------------------------------------------
	
	Page 218, answer for question 70-058.03.01.005:
	
	Change answer from "B" to "D."
	
	Microsoft Windows NT does not allow password protected shares. Only Microsoft
	Windows 95 and Windows 98 allow password protected shares.
	
	
	Pages 219 - 220: Question 70-058.03.01.006 Answer Should Be "D"
	---------------------------------------------------------------
	
	Page 218, Change correct answer to "D" instead of "B."
	
	Windows NT does not allow password protected shares. Only Windows 95 and WIndows
	98 allow one to assign a password to a share.
	
	
	Pages 231 and 232: Unclear Question and Text Correction
	-------------------------------------------------------
	
	Page 231, Question 70-058.03.02.004:
	
	Correction: Remove the disk channel reference.
	
	On the seventh line of text on both page 231 and 230 there is an error.
	
	Change:
	"You propose to implement disk striping with parity."
	To:
	"You propose to implement disk stripping with parity."
	
	
	Pages 311 and 312: Bad Question
	-------------------------------
	
	Page 311, fourth line:
	
	Change:
	"T connector = 0 ohms (measured center conductor to center conductor)"
	To:
	"T connector = 0 ohms (measured center conductor to outer conductor)"
	
	Page 312, answer B:
	Change to:
	"B. Correct: The T connector is shorted. A T connector should have infinite
	resistance between the center conductor and the outer conductor. The only way
	there would be 0 ohms of resistance is if the T connector is shorted between the
	center and outer conductors."
	
	
	Page 367: Description of Gateway Incorrect
	------------------------------------------
	
	On page 367, the description of Gateway is incorrect.
	
	Change:
	"Gateways usually function at the network layer of the OSI model."
	
	To:
	"Gateways typically function at the application layer of the OSI model. However,
	the level of functionality varies widely between different types of gateways."
	
	
	False Error Message: Tests Have Expired
	---------------------------------------
	
	After the date 9/9/99, you may receive a message stating:
	
	  Tests Have Expired. Contact Customer Service.
	
	Once you click OK, the test splash screen appears. You can start and run all
	facets of the test without error.
	
	This error message is incorrect. The tests have not expired and you should be
	able to perform them without error.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: RRBOOK 0-7356-0536-x
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
