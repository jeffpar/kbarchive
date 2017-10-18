---
layout: page
title: "Q317692: Unable to Map Error Code 1240"
permalink: kb/317/Q317692/
---

## Q317692: Unable to Map Error Code 1240

	Article: Q317692
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A server may log the following event:
	
	  Event Type: Error
	  Event Source: Server
	  Event Category: None
	  Event ID: 2510
	  Date: date
	  Time: time
	  User: N/A
	  Computer: computer name
	  Description:
	  The server service was unable to map error code 1240.
	
	CAUSE
	=====
	
	The Server service could not find the correct message to which to map this error
	code.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	determined to be at risk of attack. Please evaluate your system's physical
	accessibility, network, and Internet connectivity, and other factors to
	determine the degree of risk to your system. If your system is sufficiently at
	risk, Microsoft recommends that you apply this fix. Otherwise, wait for the next
	Windows NT service pack service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version            Size    File name
	  ---------------------------------------------------------
	  22-Feb-2002  17:28  4.0.1381.7135      73,488  Srvsvc.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The hotfix that is described in this article makes it possible for the correct
	message to be logged.
	
	The error message that is described in the "Symptoms" section of this article is
	an attempt to notify an admistrator that the Server service returned the
	following error:
	
	  ERROR_LOGIN_WKSTA_RESTRICTION
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
