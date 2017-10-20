---
layout: page
title: "Q138861: SNA Server 2.11 CD missing Rally-compatible PC Support API"
permalink: /kb/138/Q138861/
---

## Q138861: SNA Server 2.11 CD missing Rally-compatible PC Support API

{% raw %}

	Article: Q138861
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
	
	The SNA Server 2.11 readme file includes the following section, though the
	alternate DLL files mentioned are not included on the 2.11 product CD:
	
	  C.4. EHNAPPC.DLL Compatibility with Attachmate RALLY! and PC Support
	
	  IBM PC Support and Attachmate RALLY! are examples of applications that depend
	  on the static ordinal numbering of entry points in EHNAPPC.DLL. Various
	  vendors' implementations of EHNAPPC.DLL differ in this static numbering, and
	  many applications use dynamic linking by entry point name to avoid this
	  problem.
	
	  The version installed by default with the SNA Client is compatible with IBM
	  CA/400. However, this version is not compatible with RALLY!, and will cause
	  this application to fail via general protection failure or a pop-up message
	  with the text "Assertion failed." SNA Server provides alternate versions of
	  EHNAPPC.DLL and EHNRTRW.DLL which are compatible with the NetSoft
	  EHNAPPC.DLL, for use with these applications.
	
	  The alternate DLLs are found in the CD-ROM directory \CLIENTS\WIN3X\EHNNS\ and
	  must be copied into the Windows system directory if you encounter this error.
	
	CAUSE
	=====
	
	The alternate DLL files were inadvertently left off the SNA Server 2.11 CD.
	
	RESOLUTION
	==========
	
	The alternate DLL files can be found in Rally.zip, located on the following
	electronic locations:
	
	- FTP.MICROSOFT.COM, in \bussys\winnt\sna-public\rally.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kb3rdparty kbbug2.11
	KBSubcategory: ntnetserv
	
	Additional query words: 2.11 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
