---
layout: page
title: "Q214911: SMSINST: Change Window Hides Buttons When Using Repackage"
permalink: /kb/214/Q214911/
---

## Q214911: SMSINST: Change Window Hides Buttons When Using Repackage

	Article: Q214911
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsmsInst
	Last Modified: 07-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After clicking the Change button at the beginning of a Repackage, the OK,
	Cancel, Apply, and Help buttons may become hidden by the Task Bar on machines
	running the Windows 95/Windows NT 4.0 desktop shell.
	
	CAUSE
	=====
	
	This can occur when the machine used to compile the Installer script is running
	a display resolution of 640 x 480. Many of the configuration screens used in
	Systems Management Server Installer are designed to accommodate large amounts of
	information and options. This can result in Installer configuration dialog boxes
	using a large portion of the viewing area when the display is less than 800 x
	600.
	
	WORKAROUND
	==========
	
	It is recommended that you increase the display resolution to 800 x 600 or
	higher to allow for maximum viewing.
	
	You may also be able to access these buttons by hiding the Task Bar on the
	machine. For information on how to hide the Task Bar on machines running Windows
	95/98 or Windows NT 4.0, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q135893 Windows 95 Tips.txt File Contents
	
	MORE INFORMATION
	================
	
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsmsInst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
