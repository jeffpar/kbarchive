---
layout: page
title: "Q199898: SMS: Disk I/O Error  When Running Reports Using Crystal Info"
permalink: /kb/199/Q199898/
---

## Q199898: SMS: Disk I/O Error  When Running Reports Using Crystal Info

	Article: Q199898
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbServer kbsms200 kbsms200bug kbReport kbsmsUtil
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Crystal Reports to run a large report, the report may not be
	processed, and you may receive an input/output (I/O) disk error. In addition,
	the computer may stop responding (hang).
	
	CAUSE
	=====
	
	This issue can occur if you have large temporary files of 300 megabytes (MB) or
	more in the <Windir> folder or the %SystemRoot% folder. When the Crystal
	Info Reports service runs, it uses the system variables configuration, not the
	user variables configuration, to set the Temp folders. As a result, Crystal Info
	stores temporary data in the <Windir> (or %SystemRoot%) folder.
	
	In Windows NT, the Temp and Tmp folders are set by user variables not by system
	variables, by default.
	
	NOTE: When you run the Crystal Info process, temporary files are placed into the
	temporary folder that is specified in the user environment variables.
	
	WORKAROUND
	==========
	
	To view Crystal Info temporary files, run a report, and then view the file
	activity in the <Windir> folder. The Rptagent.exe tool causes tremendous
	activity and uses a lot of space in <Windir>.
	
	To configure Crystal Info to place temporary files in another folder on the sever
	where Crystal Info is installed, set the System Temp variable. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then click System.
	
	2. Click the Environment tab, and then click one of the system variables, for
	  example, the Windir system variable.
	
	3. Type "Temp" (without the quotation marks) in the Variable name box, and then
	  type "<SystemDrive>\Temp" (without the quotation marks) in the Value
	  box.
	
	4. Click Set, click Apply, and then click OK.
	
	Additional query words: prodsms smstools info
	
	======================================================================
	Keywords          : kbinterop kbConfig kbServer kbsms200 kbsms200bug kbReport kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
