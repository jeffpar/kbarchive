---
layout: page
title: "Q121382: Troubleshooting NET USE Across a Router Using TCP/IP-32"
permalink: /kb/121/Q121382/
---

## Q121382: Troubleshooting NET USE Across a Router Using TCP/IP-32

{% raw %}

	Article: Q121382
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	When you use the NET USE command across a router using TCP/IP-32 and
	encounter problems, the following troubleshooting techniques are
	recommended:
	
	1. Make sure you ping across both sides of the router. This tests to make sure
	  the router is configured and working properly.
	
	2. Check to make sure you have an entry in the LMHOSTS file that lists the
	  NetBIOS name and IP address of the machine across the router. See the
	  LMHOSTS.SAM file for a description and example LMHOSTS file entries.
	
	3. Make sure the Enable LMHOSTS Lookup check box is selected in the Advanced
	  Microsoft TCP/IP configuration dialog box. This is located in the Network
	  group; choose the Network Setup icon, and then double-click Microsoft
	  TCP/IP-32 3.11, Advanced.
	
	4. If you are having trouble connecting from File Manager, but can connect fine
	  from the MS-DOS command prompt, add the #PRE keyword to the LMHOSTS file
	  entry. This is noted in the release notes. See the LMHOSTS.SAM file for an
	  example of using the #PRE keyword.
	
	Additional query words: wfw wfwg prodtcp32 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
