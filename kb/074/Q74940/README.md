---
layout: page
title: "Q74940: Keeping MS-DOS-Based App Active Under Windows 3.1"
permalink: kb/074/Q74940/
---

## Q74940: Keeping MS-DOS-Based App Active Under Windows 3.1

	Article: Q74940
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A brief discussion of how an MS-DOS-based application running under Windows
	standard mode can prevent a task switch is provided below. For a more detailed
	discussion, refer to Chapter 7 in the "MS-DOS Programmer's Reference" version
	5.0 manual.
	
	MORE INFORMATION
	================
	
	The switcher API enables a conversation between a task switcher and one or more
	other pieces of software called respondents/clients. Each respondent is expected
	to provide a call-out function entry point. The switcher calls this function to
	get information from the respondent. The switcher also provides the responder
	with a call-in function, which the responder can call to query the switcher.
	
	The switcher builds a chain of respondents through the Build Call-Out Chain call.
	This is an INT 2Fh call specified below:
	
	  On Entry: AX = 4B01H
	            ES:BX = 0:0
	            CX:DX = call-in address of the switcher
	
	  On Exit:  ES:BX = address of client's Switch_Call_Back_Info (SCBI)
	                    data
	
	  Switch_Call_Back_Info is defined as follows:
	
	  Switch_Call_Back_Info STRUC
	    SCBI_Next      dd   ?    ; pointer to next client in the chain.
	    SCBI_Entry_Pt  dd   ?    ; Call-Out function address of the client
	    SCBI_Reserved  dd   ?    ; reserved for future use.
	    SCBI_API_Ptr   dd   ?    ; pointer to list of asynchronous API info.
	  Switch_Call_Back_Info ENDS
	
	When the call is received by a responder, it should first call the previous INT
	2FH handler. The returned ES:BX should be saved in the SCBI_Next field of its
	SCBI structure. After initializing the other fields of the structure, return
	from the interrupt with ES:BX pointing to its SCBI structure.
	
	The call-in function of the respondent will now be called every time some
	session-related activity takes place (such as creating a new session, destroying
	a session, session switch, and so forth). Each session is identified with a
	unique ID.
	
	The call pertaining to the current topic is the Query_Suspend call made by the
	switcher before switching away from an application (in the case of Windows 3.1,
	even when switching away to an MS-DOS-based application). The switcher calls the
	call-in function of each respondent with the following parameters:
	
	  On Entry: AX = 1
	            BX = current session ID
	            ES:DI = call-in address of switcher
	
	At this point, interrupts are enabled and MS-DOS calls can be made. The
	application can fail this call by returning AX = 1 and can allow this switch by
	returning AX = 0. If any respondent fails the call, the switch is prevented.
	Global clients, such as network managers, can take certain actions during this
	call to complete/suspend asynchronous activity related to the session. If a safe
	switch is possible after these actions, then they can allow the switch.
	
	The respondent gets another chance to fail the switch even if all the respondents
	return successfully from the Query_Suspend call. This is the final opportunity
	for a respondent to fail the switch. The call-in function of each respondent is
	called with the following parameters (Suspend_Session call):
	
	  On Entry: AX = 2
	            BX = current session ID
	            ES:DI = call-in address of switcher
	
	  On Exit:  AX = 0 if switch can be performed safely, else 1
	
	At this point, interrupts are disabled and MS-DOS calls may NOT be made. If all
	respondents return with AX =0, the switch is performed.
	
	The switcher also provides a way for a global respondent to maintain per-session
	data, to test if some part of memory is local/global and also to enable/disable
	the switcher.
	
	In addition to the task switcher API defined in the MS-DOS programmer's
	reference, another API has been implemented in Windows 3.1 for applications to
	obtain global memory (if available). This can be used to maintain global data or
	interrupt handlers for applications and allow a safe switch. For example, in
	Windows version 3.0, after an asynchronous NetBIOS request, the user could not
	switch away from the application that made the request; in Windows version 3.1,
	if global memory is available, this switch can be made. To set global memory to
	be reserved for all the applications, two switches are provided in the
	SYSTEM.INI file. The global memory reserved by Windows is the sum of NetHeapSize
	in the [standard] section and GlobalHeapSize in the [NonWindowsApp] section. The
	default for GlobalHeapSize is zero. The default for NetHeapSize is eight.
	
	Users running a configuration with insufficient global memory can encounter the
	error message "Switch has been prevented due to asynchronous network activity"
	when an attempt is made to switch away to an MS-DOS-based application from
	Windows, and when some asynchronous activity has taken place from within Windows
	(for example, Terminal is running).
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
