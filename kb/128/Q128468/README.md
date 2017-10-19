---
layout: page
title: "Q128468: PROFS: Cannot Receive Attachments Not Sent As Documents"
permalink: /kb/128/Q128468/
---

## Q128468: PROFS: Cannot Receive Attachments Not Sent As Documents

	Article: Q128468
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Host Access for IBM PROFS and OfficeVision, version 3.4a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IBMMAIL and other E-Mail systems connected to MS-MAIL via PROFS gateway cannot
	receive attachments if they are not sent as documents. The attachment is
	rejected due to invalid origin node name and userid. The node name displayed is
	the MS-RSCS node name and the userid is the MS-GATE userid.
	
	CAUSE
	=====
	
	When the attachment from MS-MAIL is not sent to the host as a document, it is
	sent in 'netdata' format. The header of the file contains the origin node name
	taken from the SYSTEM NETID file of MS-GATE, and the origin id of the gateway.
	
	The receiving end on IBMMAIL verifies (as an additional security measure,
	probably) that the origin node name and userid in the NETDATA file correspond to
	the origin node name and userid taken from NJE (Network Job Entry) Header.
	
	The NETDATA header is created by the CMS SENDFILE program which the gateway is
	using to send attachments.
	
	RESOLUTION
	==========
	
	The SENDFILE program is using IDENTIFY MODULE to obtain the origin node name and
	the userid. IDENTIFY MODULE is part of the CMS Nucleus. The SENDFILE program is
	used by the host code in only one place: PWAATTS XEDIT macro.
	
	2 programs were created:
	
	PWAIDENT TEXT - this is object code of PWAIDENT ASSEMBLE program. This program
	reads the first line of the PWAIDENT DATA file and stacks the content in the
	program stack.
	
	PWASENDF EXEC - this exec takes input parameters in the same format as SENDFILE
	EXEC and performs the following functions:
	
	1. It uses global variables, LANNODE and LANID, and the IDENTIFY command to
	  create a one line file PWAIDENT DATA A. The file has the same format as the
	  output from the IDENTIFY command, but the origin node name and userid are
	  taken from the LANNODE and LANID global variables.
	
	2. Generates IDENTIFY MODULE using PWAIDENT TEXT and adds it to Nucleus
	  extension.
	
	3. Calls SENDFILE to send the file. The SENDFILE CMS command is using "our"
	  IDENTIFY command from the nucleus extension.
	
	4. Drops IDENTIFY MODULE from nucleus extension.
	
	To implement the change we should change line 193 in PWAATTS XEDIT to call
	PWASENDF EXEC instead of SENDFILE EXEC.
	
	IMPACT
	------
	
	Two new programs are added to the Profs Host Access program. There is no
	noticeable performance degradation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	
