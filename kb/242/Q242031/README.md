---
layout: page
title: "Q242031: Certificate Server Updated to Use non-Microsoft X.509 CAs"
permalink: kb/242/Q242031/
---

## Q242031: Certificate Server Updated to Use non-Microsoft X.509 CAs

	Article: Q242031
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Certificate Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT 4.0 Service Pack 6 includes the ability for the Microsoft
	Certificate Server to join a non-Microsoft X.509 Certificate Authority (CA)
	hierarchy.
	
	RESOLUTION
	==========
	
	Windows NT Server, Certificate Server, or Workstation 4.0
	---------------------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Certificate Server, version
	2.0.
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server 4.0 Service Pack 6 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 6.
	
	MORE INFORMATION
	================
	
	Changes made to Service Pack 6 include:
	
	- Certificate server had several work-arounds and special processing when the
	  encoding length was 7f. This caused the installation to fail during
	  installing a CA. This special processing is now disabled by default.
	
	- The Certificate Revocation List (CRL) is a list of revoked certificates that
	  is digitally signed by the issuer of those certificates. Previously the
	  certificates were not published by default; now the certificates are.
	
	- Error reporting was improved. New errors are not introduced, but error
	  detection was increased to ensure messages are published when errors are
	  encountered.
	
	- Certificate Server Setup has added the option for the administrator to
	  control the keysize. This is done via a dropdown list with supported values
	  (for example: 512, 1024, 2048, 4096). The default size is still 512.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
