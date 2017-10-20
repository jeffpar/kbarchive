---
layout: page
title: "Q185353: SMS: Client Inventory Record Only Shows Ident. and NetMon Data"
permalink: /kb/185/Q185353/
---

## Q185353: SMS: Client Inventory Record Only Shows Ident. and NetMon Data

{% raw %}

	Article: Q185353
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsnetmon smsinv
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A client inventory record may only display data for the Identification and
	Network Monitor groups in the Systems Management Server Administrator program.
	
	CAUSE
	=====
	
	This problem may occur if the original inventory record for a computer in the
	Systems Management Server Administrator program has been deleted. In this case,
	the new inventory record will only contain updates for the Identification and
	Network Monitor groups. You may also see these symptoms during a client
	resynchronization (resync).
	
	WORKAROUND
	==========
	
	In time, the full inventory data will reappear. When the Systems Management
	Server site server detects that only a partial inventory was reported on a
	client that does not exist in the SMS database, it will create a Resync system
	job to force the client to report a full inventory the next time inventory is
	taken. However, if you want to force a full inventory to be reported
	immediately, perform the following steps:
	
	1. Delete the history file for the computer, located in the following directory,
	  where <SmsID> is the Systems Management Server unique ID for the
	  client:
	
	  Sms\Site.srv\Inventry.box\History\<SmsID>.hms
	
	2. From the system to be inventoried, connect to the SMS_SHR share of a Systems
	  Management Server logon server.
	
	3. Open a command prompt and switch to the drive that is mapped to the SMS_SHR
	  share. From there, move to the X86.bin directory (or the Alpha.bin directory
	  for a DEC Alpha server).
	
	4. Run the appropriate inventory executable file, according to the operating
	  system of the client computer:
	
	   - For client computers running Windows NT, run:
	
	  INVWIN32.EXE /F /E
	
	   - For client computers running MS-DOS, Windows, or Windows 95, run:
	
	  INVDOS.EXE /F
	
	   - For client computers running OS/2, run:
	
	  INVOS2.EXE /F
	
	The client will report a full inventory record to the SMS database and all
	inventory groups will appear as expected.
	
	MORE INFORMATION
	================
	
	For more information on another problem with a similar symptom, see the
	following article in the Microsoft Knowledge Base:
	
	  Q164891 SMS: Invwin32.exe Does Not Respond to Resync Requests
	
	For more information about this problem on Macintosh-based computers, see the
	following article in the Microsoft Knowledge Base:
	
	  Q172533 SMS: Invmac Fails to Perform Resync
	
	Additional query words: prodsms resynch
	
	======================================================================
	Keywords          : kbInventory smsnetmon smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
