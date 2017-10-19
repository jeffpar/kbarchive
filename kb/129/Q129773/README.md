---
layout: page
title: "Q129773: Error Message: LPT&lt;n&gt;: Windows Cannot Write to This File"
permalink: /kb/129/Q129773/
---

## Q129773: Error Message: LPT&lt;n&gt;: Windows Cannot Write to This File

	Article: Q129773
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): msnets
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	This article contains information about using Windows for Workgroups
	version 3.11 with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps in this article do not function properly, use a supported
	configuration or contact the manufacturer of your third-party product for
	more information.
	
	
	SYMPTOMS
	========
	
	When you try to print to a shared printer from a Windows-based program such as
	Microsoft Word for Windows or Microsoft Excel, you receive the following error
	message:
	
	  LPT<n>: Windows cannot write to this file. The disk may be full. Delete
	  any unwanted files and try again.
	
	CAUSE
	=====
	
	This problem can occur when you print from a computer running Windows for
	Workgroups 3.11 using Microsoft TCP/IP-32 3.11a to a shared printer on a Windows
	NT Server or Workstation 3.5 computer using Microsoft TCP/IP, and the print job
	goes through a "black hole" router before reaching the printer.
	
	A black hole router does not return an Internet Control Message Protocol (ICMP)
	"destination unreachable" message when it needs to fragment a packet that has
	the Don't Fragment bit enabled.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Add the following parameter to the Windows NT registry:
	
	  ENABLEPMTUBHDETECT=1
	
	  WARNING: Using the Windows NT Registry Editor incorrectly can cause serious,
	  system-wide problems that may require you to reinstall Windows NT. Microsoft
	  cannot guarantee that any problems resulting from the use of Registry Editor
	  can be solved. Use this tool at your own risk.
	
	2. Use any text editor (such as Notepad) to edit the SYSTEM.INI file on the
	  Windows for Workgroups computer. Add the following line to the [MSTCP]
	  section of the SYSTEM.INI file:
	
	  PMTUBLACKHOLEDETECT=1
	
	MORE INFORMATION
	================
	
	The PMTUBLACKHOLEDETECT setting is the Microsoft TCP/IP-32 equivalent to the
	EnablePMTUBHDetect setting. Setting the EnablePMTUBHDetect setting to 1 (true)
	causes TCP to try to detect black hole routers while performing MTU discovery. A
	black hole router does not return an ICMP "destination unreachable" message when
	it needs to fragment a TCP packet with the Don't Fragment bit set. TCP depends
	on receiving these message to perform MTU discovery. With this setting enabled,
	TCP tries to send segments without the Don't Fragment bit set if several
	retransmissions of a segment go unacknowledged. If the segment is acknowledged
	as a result, the MSS is decreased and the Don't Fragment bit is set in future
	packets on the connection. Enabling black hole router detection increases the
	maximum number of retransmissions performed for a given segment.
	
	REFERENCES
	==========
	
	For additional information about adding registry values in Windows NT, see the
	online Help file for Registry Editor, or see the following article in the
	Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	
	Additional query words: prodnt 3.11
	
	======================================================================
	Keywords          : msnets 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311
	Version           : :3.11,3.5
	
	=============================================================================
	
