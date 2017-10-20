---
layout: page
title: "Q125043: DCA DFT Link Service Fails (Event ID 252)"
permalink: /kb/125/Q125043/
---

## Q125043: DCA DFT Link Service Fails (Event ID 252)

{% raw %}

	Article: Q125043
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a DCA IRMA 3 DFT adapter, the following Event Viewer error is
	written to the log:
	
	  
	
	  Event ID: 252
	  Description:
	     Error during initialization, rc = 13
	
	  Explanation:
	     An error was returned from a Windows NT function during an attempt
	     to initialize the DFT connection.
	
	  Action:
	     See your Windows NT documentation for information on return codes.
	     Check the return code. Check that the device name of the DFT driver
	     specified in the link service dialog matches the name specified in
	     the Registry.
	
	Also, starting SNADFTLU.EXE from the <snaroot>\SYSTEM\HWSETUP\DCADFT
	directory causes the following error message to appear:
	
	  The procedure entry point sepfpass could not be located in the dynamic
	  link library SNATRC.DLL.
	
	CAUSE
	=====
	
	There is an old copy of DCADFT.DLL in the SNA\SYSTEM directory, and an old copy
	of SNADFTLU.EXE in the SNA\SYSTEM\HWSETUP\DCADFT directory.
	
	RESOLUTION
	==========
	
	Rename DCADFT.DLL to DCADFT.OLD. Copy the IBMDFT.DLL file in the SNA\SYSTEM
	directory to DCADFT.DLL. Also, copy SNADFTLU.EXE from the
	<snaroot>\SYSTEM\HWSETUP\IBMDFT directory to
	<snaroot>\SYSTEM\HWSETUP\DCADFT.
	
	Additional query words: prodsna dca dft 252 snadftlu
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
