---
layout: page
title: "Q313437: HOW TO: Enable Logging in IIS 5.0"
permalink: /kb/313/Q313437/
---

## Q313437: HOW TO: Enable Logging in IIS 5.0

	Article: Q313437
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Enable and Configure IIS Logging
	
	SUMMARY
	=======
	
	This step-by-step article describes how to enable Internet Information Server
	(IIS) version 5.0 logging. You can use IIS 5.0 to carry out extensive logging of
	connections that are made to the server. Logging is a vital part of your IIS 5.0
	security plan. You can use the log files to determine if a security event has
	taken place and the files can provide information about the source of the
	attack.
	
	IIS 5.0 can save log files in a variety of file types. The preferred log type in
	a secure environment is the W3C Extended Log File Format. This log format allows
	you to configure a large number of extended attributes that are useful in
	security analysis.
	
	The following information should be collected in your W3C Extended Log File
	Format logs:
	
	- Client IP Address
	
	  This is the IP address of the client that accessed the server. Note that if a
	  Web proxy computer is in "front" of the IIS 5.0 computer, the IP address of
	  the proxy may show up in the Client IP Address box.
	
	- User Name
	
	  The name of the user that accessed the server. If anonymous authentication is
	  configured, a hyphen (-) is logged instead of the user name.
	
	- Method
	
	  The action that the client tried to perform. For example, the GET or POST
	  commands.
	
	- URI Stem
	
	  The resource on the IIS 5.0 computer that the user attempted to access. This
	  might be an HMTL page, a graphic, a GCI program or script.
	
	- Protocol (HTTP) Status
	
	  This is the status of the action in HTTP terms, as represented by a code
	  number.
	
	- Win32 Status
	
	  The status of the action in Win32 code terms. Error numbers are reported, such
	  as error 5, which means that access was denied. You can evaluate error
	  messages by typing "net helpmsg err" (without the quotation marks) at the
	  command prompt, and then pressing ENTER.
	
	- User Agent
	
	  The name of the browser that is accessing the server.
	
	- Server IP Address
	
	  This is the IP address of the virtual server that is receiving the request.
	  This is helpful if you host multiple virtual servers on the same computer
	  that uses different IP addresses.
	
	- Server Port
	
	  This is the port number of the virtual server that is receiving the request.
	  This is helpful if you host multiple virtual servers on the same computer
	  that uses different IP addresses.
	
	Enable and Configure IIS Logging
	--------------------------------
	
	To configure IIS logging:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Services Manager.
	
	2. Right-click the virtual server on which you want to enable logging, and then
	  click Properties.
	
	3. Click the Web Site tab, and then click to select the Enable Logging check
	  box.
	
	4. In the "Active log format" box, click W3C Extended Log File Format.
	
	5. Click Properties. On the General Properties tab, click Daily to cause the
	  creation of a new log file each day.
	
	6. Click "Use local time for file naming and rollover" if you want to use local
	  time rather than GMT to determine when a new file is created and named.
	
	7. Click the Extended Properties tab, and then select the options that are noted
	  in the first part of this article. Click Apply, and then click OK.
	
	8. Click Apply, and then click OK in the "Web site Properties" dialog box.
	
	After you make the preceding changes, restart the virtual server.
	
	NOTE: For more information about the extended log file format, see the W3C
	Working Draft WD-logfile-960323 specification at the following Web site:
	
	  http://www.w3.org/TR/WD-logfile (http://www.w3.org/TR/WD-logfile)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
