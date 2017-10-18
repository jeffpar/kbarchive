---
layout: page
title: "Q148739: RUI_PURGE &amp; SLI_PURGE Verbs Fail When Using the Thunking DLLs"
permalink: kb/148/Q148739/
---

## Q148739: RUI_PURGE &amp; SLI_PURGE Verbs Fail When Using the Thunking DLLs

	Article: Q148739
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The 16-bit Windows LUA RUI_PURGE and SLI_PURGE calls fail when you run over the
	SNA Server Windows NT thunking DLLs.
	
	CAUSE
	=====
	
	The thunking library runs on a Win32 system in the Win16 VDM. When it receives
	an RUI call from a Win16 application, it allocates a new Verb Control Block
	(VCB) and copies all the entries from the original VCB into it. It does this
	because the packing of the VCBs are different for Win16 and Win32. It then
	passes the new VCB into the Win32 RUI library, which processes the verb.
	
	The RUI_PURGE call has as one of its parameters the address of the VCB for the
	RUI_READ that is to be canceled. The thunking library, when it receives an
	RUI_PURGE verb, allocates a new VCB for the RUI_PURGE with Win32 packing, copies
	the entries from the original VCB into it and passes that into the Win32 RUI
	library to be processed. The new VCB that is passed into the library still has
	as its parameter the address of the old RUI_READ VCB. The Win32 library
	completely fails to recognize this address (it has only seen the address of the
	new VCB), and so returns the RUI_PURGE verb with an error.
	
	RESOLUTION
	==========
	
	The RUI thunking library has been changed to allow the new VCB for the RUI_PURGE
	to pass in the address of the new VCB for the RUI_READ, not the old VCB for the
	RUI_READ. The following files have been updated:
	
	  <snaroot>\SYSTEM\THUNK\WINRUI.DLL
	  <snaroot>\SYSTEM\THUNK\WINSLI.DLL
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	2.11.sp1. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
