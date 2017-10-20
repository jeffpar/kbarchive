---
layout: page
title: "Q302863: XFOR: How to Use the IMC Queue Dump Utility (Imcdump.exe)"
permalink: /kb/302/Q302863/
---

## Q302863: XFOR: How to Use the IMC Queue Dump Utility (Imcdump.exe)

{% raw %}

	Article: Q302863
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the IMC Queue Dump utility (Imcdump.exe).
	Imcdump.exe is included with Exchange Server versions 4.0, 5.0, and 5.5. For
	Exchange Server 5.5, Imcdump.exe is located in the root of the CD-ROM in the
	Server\Support\Utils\<Platform> folder, where <Platform> is either
	Alpha or I386. For Exchange Server, versions 4.0 and 5.0, Imcdump.exe is located
	on the root of the CD-ROM in the Support\Utils\<Platform> folder.
	
	MORE INFORMATION
	================
	
	Imcdump.exe displays information about the internal representation of the
	Internet Mail Service queues that is stored in the Queue.dat file of the Imcdata
	folder.
	
	How to Use Imcdump.exe
	----------------------
	
	Usage: imcdump <heap-path>
	INBOUND|OUTBOUND|FREELIST|HEAP|<queuename>
	
	The <heap-path> is the path to the Queue.dat file including the file name.
	By default, the path is <Homedrive>\Exchsrvr\Imcdata\Queue.dat.
	
	For example, to dump the INBOUND queue for the Queue.dat file that is located in
	the default location, run the following command from a command prompt (start
	from the same folder where the Imcdump.exe file is located):
	
	  "imcdump <homedrive>\exchsrvr\imcdata\queue.dat inbound" (without the
	  quotation marks)
	
	When you run this command, the output is displayed in the window. To dump the
	output to a file, run the following command:
	
	  "imcdump <homedrive>\exchsrvr\imcdata\queue.dat
	  inbound>c:\imcdump.txt" (without the quotation marks)
	
	Troubleshooting
	---------------
	
	This section describes potential errors, their causes and resolutions.
	
	- Possible issue:
	
	   - Symptoms: You receive either of the following error messages:
	
	  Failed to open C:\Exchsrvr\Imcdata\Queue.dat Error=-2147483616
	
	  -or-
	
	  Failed to open C:\Exchsrvr\Imcdata\Queue.dat Error=80000020
	
	   - Cause: The Microsoft Exchange Internet Mail Service (MSExchangeIMC)
	     service is started.
	
	   - Resolution: Stop the MSExchangeIMC service in the Services Control Panel.
	
	- Possible issue:
	
	   - Symptoms: You receive the following error message:
	
	  Failed to open C:\Exchsrvr\Imcdata\ Error=-2147483645
	
	   - Cause: The incorrect path is specified.
	
	   - Resolution: Enter the correct path to the Queue.dat file. Make sure to
	     include the Queue.dat file in the path.
	
	
	Additional query words: Microsoft Exchange Internet Mail Connector service readme.rtf readme.doc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
