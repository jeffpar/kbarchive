---
layout: page
title: "Q251285: Err Msg: Setup Step Failed. Unable to Add C:&#92;Program Files..."
permalink: /kb/251/Q251285/
---

## Q251285: Err Msg: Setup Step Failed. Unable to Add C:&#92;Program Files...

	Article: Q251285
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the COM Transaction Integrator (COMTI) component is selected when you install
	SNA Server 4.0 Service Pack 2 (SP2) on Windows 2000-based computer, the
	following error message occurs:
	
	  Setup Step Failed
	  Unable to add C:\Program Files\SNA\COMTI\COMTISec.dll to the MTS COM+
	  Utilities package.
	
	CAUSE
	=====
	
	To give applications the ability to explicitly override security information
	when you use COMTI, a utility component is provided so you can add your callback
	pointer to the MTS context, and create new MTS objects inheriting from the
	modified context. This component is automatically installed in the MTS-supplied
	Utilities package. However, the Windows 2000 Component Services does not contain
	a Utilities package.
	
	WORKAROUND
	==========
	
	This error message does not prevent the Setup program from completing. You can
	continue the Setup program by clicking the OK button in the error dialog box.
	When you complete the setup and install SNA Service Pack 3, all COMTI features
	work except for explicit security. To use explicit security, add a new server
	application to the Windows 2000 Component Services. In this new application,
	install the COMTISec.dll file and the COMTISec.tlb file from the Snaroot\COMTI
	directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0 SP2 and SP3.
	
	MORE INFORMATION
	================
	
	Please note that only SNA Server 4.0 Service Pack 3 or later is supported on
	Windows 2000.
	
	For additional information on a potential problem using COMTI Explicit Security
	on Windows 2000, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q260305 COMTI Explicit Security Callback Feature Fails on Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
