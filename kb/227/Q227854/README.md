---
layout: page
title: "Q227854: XCLN: Dr. Watson in Schedule+ While Opening Outlook Calendar"
permalink: /kb/227/Q227854/
---

## Q227854: XCLN: Dr. Watson in Schedule+ While Opening Outlook Calendar

{% raw %}

	Article: Q227854
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	One of the following error messages may occur while accessing a Microsoft
	Outlook user's Calendar using Microsoft Schedule+ 7.x with the Microsoft
	Schedule+ Transport DLL (Msoutl32.dll):
	
	  An application error has occurred and an application error log is being
	  generated.
	  Schdpl32.exe
	  Exception: access violation (0xc0000005), Address: 0x1001729a
	
	-or-
	
	  An application error has occurred and an application error log is being
	  generated.
	  Schdpl32.exe
	  Exception: access violation (0xc0000005), Address: 0x1001729a
	
	In other situations, an application error does not occur. However, the Microsoft
	Outlook user's schedule appears empty.
	
	CAUSE
	=====
	
	The Microsoft Outlook user's Calendar folder contains a corrupt recurring
	appointment. Specifically, the appointment is missing one or more required MAPI
	properties.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Msoutl32.dll
	
	+----------------------------+
	| Msoutl32.dll | 8.20.2588.0 | 
	+----------------------------+
	
	
	
	WORKAROUND
	==========
	
	To correct the corrupt recurring appointments, perform the following steps:
	
	1. From the Microsoft Outlook user's mailbox, select the Calendar folder.
	
	2. On the View menu, click Current View, and click Recurring Appointments. This
	  will display all recurring appointments categorized by their recurrence
	  pattern (Daily, Weekly, Monthly). You may see one or more recurrence patterns
	  with a value of (none).
	
	3. For each appointment in the (none) category, perform the following actions to
	  reset the recurrence patterns and re-write the necessary MAPI properties to
	  the appointment:
	
	  a. Open the appointment.
	
	  b. Click the Recurrence button on the toolbar.
	
	  c. Click OK.
	
	  d. Click the "Save and Close" button on the toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Schedule+ 7.0 and 7.5.
	
	MORE INFORMATION
	================
	
	If you are using version 8.2.1.4308 of Msoutl32.dll, you may receive a Dr.
	Watson in Schdpl32.exe or Exchng32.exe, as shown above.
	
	If you are using version 8.1.2367.0 of Msoutl32.dll, the user's schedule is
	displayed, but you are unable to see any appointments in the Microsoft Outlook
	Calendar.
	
	Additional query words: crash drwtsn32.log gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
