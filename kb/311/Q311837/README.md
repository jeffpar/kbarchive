---
layout: page
title: "Q311837: End of Print Job Handling Incorrect If Print Filter DLL Used"
permalink: /kb/311/Q311837/
---

## Q311837: End of Print Job Handling Incorrect If Print Filter DLL Used

	Article: Q311837
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Print Service may not process the end of print jobs correctly when the
	print sessions are configured to use a print filter dynamic link library (DLL).
	The exact symptoms that result from the incorrect end-of-job processing will
	vary depending on the print job and on the print filter DLL that is being used.
	For example, this problem may result in abnormal termination of the affected
	print session or there may be no visible symptoms at all.
	
	CAUSE
	=====
	
	The following problems were identified in the Host Print Service when print
	sessions were configured to use print filter DLLs:
	
	- The Host Print Service was passing uninitialized variables to the print
	  filter DLL.
	
	- If a print session was configured to use a Printer Definition Table (PDT)
	  file that contains an END_JOB macro, the END_JOB macro was being processed
	  after PrtFilterJobEnd() had been called.
	
	- Under certain circumstances, data passed to the Host Print Service by the
	  print filter DLL may have been passed back to the print filter DLL for
	  further processing.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+----------------------------------+
	| File name   | Date       | Time  | 
	+----------------------------------+
	| Winvprt.dll | 01/04/2001 | 19:33 | 
	+----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	STATUS
	======
	
	SNA Server 4.0
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	Host Integration Server 2000
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	
	MORE INFORMATION
	================
	
	See the Host Integration Server 2000 SDK for more information on the use of a
	print filter DLL.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
