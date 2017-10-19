---
layout: page
title: "Q114112: Receiving Blank Pages or &quot;Bad Error&quot; Err Msg in At Work PC Fax"
permalink: /kb/114/Q114112/
---

## Q114112: Receiving Blank Pages or &quot;Bad Error&quot; Err Msg in At Work PC Fax

	Article: Q114112
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft At Work PC Fax appears to successfully receive faxes; however, once
	the transmission is completed, you receive blank pages or a
	
	  Bad Error
	
	error message.
	
	CAUSE
	=====
	
	Blank pages or the "Bad Error" message occurs when you are using a Class 2 modem
	and the bit order of the fax is reversed from the order in which Microsoft At
	Work PC Fax expects it.
	
	You also receive blank pages if you have seperator pages selected in Print
	Manager.
	
	
	RESOLUTION
	==========
	
	To correct these problems, add the following line to the [COMx] section of the
	EFAXPUMP.INI file:
	
	  PreAnswerCommand=AT+FBOR=0
	
	If this does not correct the problem, restore the line to the following:
	
	  PreAnswerCommand=AT+FBOR=1
	
	MORE INFORMATION
	================
	
	"PreAnswerCommand=AT+FBOR=0" allows Microsoft At Work PC Fax to read the bits in
	the order they are received.
	
	"PreAnswerCommand=AT+FBOR=1" allows Microsoft At Work PC Fax to read the bits in
	reverse order of how they are received.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
