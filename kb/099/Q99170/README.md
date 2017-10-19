---
layout: page
title: "Q99170: PROFS: Err Msg: ERROR: Directory ID Name Does Not Exist..."
permalink: /kb/099/Q99170/
---

## Q99170: PROFS: Err Msg: ERROR: Directory ID Name Does Not Exist...

	Article: Q99170
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b,3.1,3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 2.1b, 3.1, 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upload the Host Access files to the host VM ID for the Microsoft Mail
	Gateway to IBM PROFS and OfficeVision, the Install program is executed from the
	CMS command prompt. During the Install process, the program prompts you with a
	series of questions regarding your system. The final stage of the Install
	process is for the Install program to initialize and start the Host program on
	the VM ID.
	
	During this last stage, the following error message may appear:
	
	  "ERROR: Directory ID name does not exist. Gateway unable to operate!"
	
	After this error message is displayed, the Host code halts and returns you to the
	CMS READY prompt.
	
	CAUSE
	=====
	
	One of the main causes of this error message is an invalid NODE and/or USEID
	name entered during the installation process. This information is entered when
	the Install program prompts you for the Node and ID of the VM Administrator,
	where system messages are to be sent.
	
	RESOLUTION
	==========
	
	Using the XEDIT command, edit the file PWAINIT EXEC in versions 3.2 and earlier
	and PWAINIT DATA in versions 3.3 and later.
	
	For example:
	
	  XEDIT PWAINIT EXEC A
	
	Scroll through the file to the location where the node name and VM IDs are
	located. The IDs can be located by looking at the comments as you scroll through
	the file. The invalid ID should be replaced and the file saved.
	
	To restart Host Access, type:
	
	  "PROFILE" (without the quotation marks)
	
	Additional query words: 2.1b 3.0 3.1 3.2 3.3 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330 kbMailGateIBMPROFS210b
	Version           : :2.1b,3.1,3.2,3.3
	
	=============================================================================
	
