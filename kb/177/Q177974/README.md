---
layout: page
title: "Q177974: Location of CedarBank Recording File Is Misleading"
permalink: /kb/177/Q177974/
---

## Q177974: Location of CedarBank Recording File Is Misleading

	Article: Q177974
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The instructions for locating a recording file to run the CedarBank sample in
	playback mode are misleading. They state that the recording file is in the
	directory where the CedarBank sample code is installed. Actually, there are two
	recording files shipped with Microsoft COM Transaction Integrator (COMTI). One
	file is in the ~\sna\Comti\Tutorials\CedarBank\CICSLink subdirectory for CICS
	LINK playback testing and the other is in the
	~\sna\Comti\Tutorials\CedarBank\Ims subdirectory for IMS playback testing.
	
	MORE INFORMATION
	================
	
	If you create your own recording files using the turnaround feature of
	diagnostic capture, the location of the files is irrelevant because you do not
	need them.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
