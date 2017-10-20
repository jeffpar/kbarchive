---
layout: page
title: "Q177994: CICS Abend 'ADPL'"
permalink: /kb/177/Q177994/
---

## Q177994: CICS Abend 'ADPL'

{% raw %}

	Article: Q177994
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
	
	A CICS LINK Remote Environment (RE) is used. A CICS COBOL application program is
	invoked when the client application invokes a COMTI method. The CICS program
	issues the EXEC CICS LINK command to start another CICS program. CICS abend ADPL
	occurs in the program being linked to.
	
	MORE INFORMATION
	================
	
	The IBM "CICS/ESA Messages and Codes" manual provides the following information
	regarding the abend ADPL:
	
	  Explanation: A server program has issued a command which is restricted in the
	  distributed program link (DPL) environment. Certain API and CPI- RR requests,
	  and the DL/I terminate request are not allowed in the DPL environment. See
	  the CICS/ESA Application Programming Guide for a list of these restricted
	  commands.
	
	  A server program is a program which has been remotely linked, or a Program
	  defined to run with the DPL subset.
	
	Existing and new applications should be examined to verify that they do not use
	commands that are not supported under DPL.
	
	REFERENCES
	==========
	
	IBM "CICS/ESA Messages and Codes," version 3, release 3 (SC33-0672-02)
	IBM "CICS/ESA Application Programming Guide," version 3, release 3 (SC33-
	0675-02)
	
	Additional query words: crash abort abnormal end
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
