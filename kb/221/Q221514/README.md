---
layout: page
title: "Q221514: HSE_REQ_GET_CERT_INFO_EX Not Exposed in ServerSupportFunction"
permalink: /kb/221/Q221514/
---

## Q221514: HSE_REQ_GET_CERT_INFO_EX Not Exposed in ServerSupportFunction

{% raw %}

	Article: Q221514
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Internet Information Server (IIS) 4.0, several new options have
	been added to the ServerSupportFunction. The ServerSupportFunction is a callback
	function that is supplied in the ECB (EXTENSION_CONTROL_BLOCK). It supports
	several auxiliary functions that are not covered by other explicit callback
	functions in the ECB. One of these new options is HSE_REQ_GET_CERT_INFO_EX,
	which returns a CERT_CONTEXT structure. This option is currently only exposed to
	ISAPI Extensions, so when writing an ISAPI Filter, this call may fail and may
	not return a CERT_CONTEXT structure as expected.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
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
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The following code can be used to obtain a client certificate in the ISAPI
	Filter:
	
	  char CertificateBuf[8192];
	  CERT_CONTEXT_EX ccex;
	  ccex.cbAllocated = sizeof(CertificateBuf);
	  ccex.CertContext.pbCertEncoded = (BYTE*)CertificateBuf;
	  DWORD dwSize = sizeof(ccex);
	
	     if (pfc->ServerSupportFunction(pfc,
	   (enum SF_REQ_TYPE)HSE_REQ_GET_CERT_INFO_EX,                               
	   (LPVOID)&ccex, dwSize,NULL) == FALSE)
	     {
	  // Handle Error Here
	     }
	     // ccex now contains valid client certificate information.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
