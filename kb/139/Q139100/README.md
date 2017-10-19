---
layout: page
title: "Q139100: Calculating WinNT 3.51 Memory, Disk, and License Requirements"
permalink: /kb/139/Q139100/
---

## Q139100: Calculating WinNT 3.51 Memory, Disk, and License Requirements

	Article: Q139100
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information was obtained from Microsoft Press Course Number 549, Part
	number 5204A. It provides information to calculate memory, hard disk and license
	requirements. The information obtained from completing this form should not be
	considered exact requirements but rather a general guideline.
	
	MORE INFORMATION
	================
	
	Computing Memory Requirements
	
	System Memory (minimum required 16 MB)                      (A) _____
	
	User Data:
	 Average size of data files open per user                  (B) _____
	 Number of users                                           (C) _____
	 Multiply B by C                                           (D) _____
	
	Applications:
	 Average size of executables being run off the server      (E) _____
	 Number of application being run off the server            (F) _____
	 Multiply E and F                                          (G) _____
	
	Total System Memory Recommended for this Configuration         _____
	
	Computing Hard Disk Requirements
	
	System Disk Drive (C: Drive)
	 Greater of 250MB or 150MB + server memory + 12 MB         (A) _____
	
	Applications (D: Drive)
	 Size of each application installation                     (B) _____
	 Number of application being run off the server            (C) _____
	 Multiply B and C                                          (D) _____
	
	User Data (E: Drive)
	 Budgeted disk space per user                              (E) _____
	 Number of users                                           (F) _____
	 Multiply by 110% to get an extra margin for error         (G) _____
	 Multiply E by F by G                                      (H) _____
	
	Total System Hard Disk Recommended for this Configuration       _____
	
	Computing the Number of Client Access Licenses You Need to Buy
	
	Per Server
	 Number of servers (also enter in box E)                   (A) _____
	 Number of simultaneous workstation connections to each
	 server                                                    (B) _____
	 Number of client access licenses required equals (A*B)    (C) _____
	
	Per Seat
	 Number of seats that will access any server               (D) _____
	
	Choosing a Licensing Model
	Check one:
	
	 ____  The number in box D is greater than the number in box C,
	Enter the number in box C in box F - USE PER SERVER
	
	 ____  The number in box C is greater thank the number in box D,
	Enter the number in box D in box F - USE PER SEAT
	
	What to Buy
	 You need to buy             (E) _____  Servers
	 You need to buy             (F) _____  Client Access Licenses
	
	Additional query words: prodnt ntdomain
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
