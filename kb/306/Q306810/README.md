---
layout: page
title: "Q306810: XCLN: Japanese ODK Language Tool Fails During Package Creation"
permalink: /kb/306/Q306810/
---

## Q306810: XCLN: Japanese ODK Language Tool Fails During Package Creation

{% raw %}

	Article: Q306810
	Product(s): Microsoft Exchange
	Version(s): 5.5,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	For a Microsoft Outlook 98 Deployment Kit English version of this article, see Q220923.
	
	SYMPTOMS
	========
	
	When you use the Japanese Outlook Deployment Kit to create Microsoft Outlook 98
	foreign language deployment packages, package creation may fail with the
	following error message:
	
	  The Outlook 98 Deployment Wizard was unable to generate a customized version
	  of Outlook. Either an error has occurred, or the user pressed Cancel
	
	CAUSE
	=====
	
	When the Odklang.exe file copies files from the CD, it is preserving the
	read-only attribute of most of the files. When the ODK wizard tries to build a
	custom package, it has problems with the read-only state of some of the files.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The Japanese version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Version      Size     File name  
	  ----------------------------------------------------
	  08/29/2001  4:05a  8.50.0.5620   65,536  Odklang.exe
	  08/28/1998  8:19a  4.0.0.2926   402,481  Scrrun.dll
	
	
	
	WORKAROUND
	==========
	
	Remove all read-only attributes of the files that are copied by Odklang.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: outlook98 olk98 jpn
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : :5.5,98
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
