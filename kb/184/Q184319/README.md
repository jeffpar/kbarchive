---
layout: page
title: "Q184319: FTP Service's DefaultLogonDomain Not Available in MMC"
permalink: /kb/184/Q184319/
---

## Q184319: FTP Service's DefaultLogonDomain Not Available in MMC

{% raw %}

	Article: Q184319
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FTP Service's DefaultLogonDomain is not available in the Microsoft
	Management Console (MMC).
	
	WORKAROUND
	==========
	
	To work around this problem, manually add DefaultLogonDomain to the FTP Service
	in the MMC. To do this, you can use either of the following:
	
	- The Metaedit.exe utility, included with the IIS 4.0 Resource Kit.
	
	  -or-
	
	- The Adsutil.vbs utility that is included with IIS 4.0.
	
	  NOTE: By default, Adsutil.vbs is located in the
	  <%SystemRoot%>\System32\Inetsrv\Adminsamples folder. Also, you must
	  first install the Windows Script Host before using Adsutil.vbs. For more
	  information on using Adsutil.vbs, see below.
	
	MORE INFORMATION
	================
	
	Specific Instructions for Using Adsutil.vbs
	-------------------------------------------
	
	Run Adsutil.vbs from a command prompt, using the appropriate syntax below
	(depending on whether you want to set DefaultLogonDomain for all FTP sites, just
	the default FTP site, or other sites):
	
	- To set DefaultLogonDomain for all FTP sites, run the following command:
	
	  " adsutil set msftpsvc/DefaultLogonDomain "DomainName" " (without the
	  quotation marks)
	
	- To set DefaultLogonDomain for only the default FTP site, run the following
	  command:
	
	  " adsutil set msftpsvc/1/DefaultLogonDomain "DomainName" " (without the
	  quotation marks)
	
	  NOTE: If the command listed above, which uses the Adsutil utility, fails, you
	  can use the following command instead, which uses the Mdutil utility from the
	  Windows NT Option Pack compact disc:
	
	  " mdutil.exe set /msftpsvc/1/DefaultLogonDomain "DomainName" " (without the
	  quotation marks)
	
	- To set DefaultLogonDomain for any other site, use the same syntax as the
	  default FTP site above, but change the "1" parameter to the appropriate
	  service number.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
