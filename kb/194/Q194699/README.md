---
layout: page
title: "Q194699: Extended Log File Format Always in GMT"
permalink: /kb/194/Q194699/
---

## Q194699: Extended Log File Format Always in GMT

	Article: Q194699
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) administrators cannot change the time format
	for the extended log file format to use a time zone other than Greenwich Mean
	Time (GMT).
	
	CAUSE
	=====
	
	The extended log file format is defined in the W3C Working Draft WD-
	logfile-960323 specification by Phillip M. Hallam-Baker and Brian Behlendorf.
	This document defines the Date and Time files to always be in GMT:
	
	  Date
	  <date> = 4<digit> "-" 2<digit> "-" 2<digit> Dates are
	  recorded in the format YYYY-MM-DD where YYYY, MM and DD stand for the numeric
	  year, month and day respectively. All dates are specified in GMT. This format
	  is chosen to assist collation using sort.
	
	  Time
	  <time> = 2<digit> ":" 2<digit> [":" 2<digit> ["."
	  *<digit>]
	
	  Times are recorded in the form HH:MM, HH:MM:SS or HH:MM:SS.S where HH is the
	  hour in 24 hour format, MM is minutes, and SS is seconds. All times are
	  specified in GMT.
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information on the extended log file format, see the W3C Working Draft
	WD-logfile-960323 specification at the following URL:
	
	  http://www.w3.org/TR/WD-logfile
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q193612 : Log Files Rolled Over According to GMT, Not Local Time Zone
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
