---
layout: page
title: "Q138856: Error 4119 when Selecting SNA Server Admin Security Options"
permalink: /kb/138/Q138856/
---

## Q138856: Error 4119 when Selecting SNA Server Admin Security Options

	Article: Q138856
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select any of the options under SNA Server Admin Security the following
	error message appears:
	
	  Error: 4119
	  Cannot find or connect to the primary SNA server to support your
	  request.
	
	Note: The three selections on SNA Server Admin Security menu are Permissions,
	Auditing, and Owner.
	
	CAUSE
	=====
	
	This error occurs if SNA Server is installed on a Windows NT Server that has a
	computer name containing 15 characters.
	
	When shared memory is being initialized, the GetComputerName() application
	programming interface (API) call tries to null-terminate the computer name
	string it writes to the shared memory Cfgbox field. This field is 15 bytes long,
	as it should be, but that is one byte too short to hold the 15- character
	computer name plus the null character. Therefore, the API GetComputerName()
	returns without writing the string at all, leaving the field full of zeroes.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <snaroot>\SYSTEM\SNABASE.EXE to correct
	this problem.
	
	To work around this problem, install SNA Server on a NT Server with a
	computername shorter than 15-characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kbbug2.10 kbbug2.11
	KBSubcategory: ntnetserv
	snasp1rel
	
	Additional query words: prodsna 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
