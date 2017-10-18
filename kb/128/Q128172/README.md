---
layout: page
title: "Q128172: PC WSPlus: SPlusReadAppt Fails to Retrieve Creator Information"
permalink: kb/128/Q128172/
---

## Q128172: PC WSPlus: SPlusReadAppt Fails to Retrieve Creator Information

	Article: Q128172
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Visual Basic application attempting to use the SPlusReadAppt
	function will not retrieve the creator of an appointment.
	
	CAUSE
	=====
	
	For developing applications in Visual Basic, the Schedule Access Libraries (SAL)
	includes the SPlusReadAppt function, which is declared in the module file
	SPLUS.BAS to make calls to the library SPLUS.DLL. SPlusReadAppt makes calls to
	functions BPLUSReadAppt() and BPLUSGetReadAppt().
	
	The call to BPLUSGetReadAppt() function should return a type (structure) of
	SPlusAppt that includes a reference to the creator type. However, the creator
	type is not correctly returned. The creator information can be accessed by an
	application built with the C interface to SPLUS.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0a of Microsoft
	Schedule+ for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Not every appointment will have a creator associated with it. The creator
	information is included when the appointment is created by a user who is not the
	owner of the calendar file. This can only happen when another user has been
	given create or assistant rights by the owner of the calendar. When these users
	create appointments on calendars other than their own, they are recorded as the
	creator.
	
	Additional query words: schedule plus 1.00a salapp mapirecip organizer mapi
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	
	=============================================================================
	
