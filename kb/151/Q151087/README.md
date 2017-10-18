---
layout: page
title: "Q151087: Mastering Visual C++: Page Fault While Running Lab Exercise"
permalink: kb/151/Q151087/
---

## Q151087: Mastering Visual C++: Page Fault While Running Lab Exercise

	Article: Q151087
	Product(s): Microsoft Mastering Series
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbmm
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual C++ ISBN 1-55615-914-5, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the icon in the To Set Up The Table Join section, located in the
	Lab Exercise "Building A DAO Database Application" (Chapter 12, Lab 2, Exercise
	1), you receive a series of messages culminating in the error:
	
	  EMPLOYEE caused an Invalid Page Fault in module KERNEL32.DLL
	
	RESOLUTION
	==========
	
	The databases used in this exercise must be copied to your hard drive,
	read-write enabled and executed from there.
	
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Mastering Microsoft Visual C++,
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Chapter 12 lab exercises focus on accessing and modifying database
	information. All databases used in these exercises must be read-write enabled.
	The database the icon in the section "To Set Up The Table Join" points to a
	database that, because it is located on the Mastering Microsoft Visual C++
	compact disc, is read-only.
	
	Additional query words: 1.00 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kberrmsg kbmm 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :1.0,1.0a
	
	=============================================================================
	
