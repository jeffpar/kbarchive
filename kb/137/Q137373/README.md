---
layout: page
title: "Q137373: Using UINFO.XNF in MIF Entry Results in Corrupted File Error"
permalink: /kb/137/Q137373/
---

## Q137373: Using UINFO.XNF in MIF Entry Results in Corrupted File Error

	Article: Q137373
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run MIF Entry (MIFWIN.EXE) on the client computer and use a completely
	revised form (UINFO.XNF) modified on the Systems Management Server compared with
	the original UINFO.XNF, the following error message appears:
	
	  The form template file is corrupted.
	
	WORKAROUND
	==========
	
	To work around this problem, rename or delete the UINFO.SEV file located in the
	\MS\SMS\NOIDMIFS directory on the client computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The UINFO.XNF file is the default form used when you run MIFWIN on the client
	computer. Once you enter the prompted information and save the form, UINFO.SEV
	and UINFO.MIF are created and saved in the \MS\SMS\NOIDMIFS directory on the
	client computer. Once the Systems Management Server sends a package containing a
	new UINFO.XNF file to the client computers and you run MIFWIN, MIFWIN checks the
	entry contents of the new UINFO.XNF and UINFO.SEV.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
