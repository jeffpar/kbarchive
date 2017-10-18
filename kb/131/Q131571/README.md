---
layout: page
title: "Q131571: Microsoft Fax Attachment Not Associated"
permalink: kb/131/Q131571/
---

## Q131571: Microsoft Fax Attachment Not Associated

	Article: Q131571
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a binary file attachment in Microsoft Fax using Microsoft
	Exchange in Windows 95, you may receive the following error message
	
	  The following recipient(s) could not be reached:
	
	  The file <filename> is not associated with a program. Open the file and
	  then print to the MS Fax printer.
	
	where <filename> is the name of the attached binary file.
	
	CAUSE
	=====
	
	This error can be caused by either of the following conditions:
	
	- You tried to send a non-printable file over a Class 2 fax/modem or to a fax
	  machine that does not support binary file transfer.
	
	- You are using a Class 1 fax/modem and have the fax properties set to Not
	  Editable (facsimile format only).
	
	RESOLUTION
	==========
	
	You can send binary files with Microsoft Fax from a Class 1 fax/modem to a Class
	1 fax/modem. Both fax/modems must be set up with the Editable If Possible or
	Editable Only setting.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
