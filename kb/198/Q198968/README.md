---
layout: page
title: "Q198968: Err Msg: SSL Required"
permalink: kb/198/Q198968/
---

## Q198968: Err Msg: SSL Required

	Article: Q198968
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the HTMLA Web Administration forms that come with Internet
	Information Services (IIS) 5.0, you may see a problem with requiring SSL. The
	HTMLA Administration forms do not validate when Require SSL is selected on a Web
	site. If you do not have a key installed, it may render you Web site unusable
	until the problem is corrected. If you use Require SSL on the default Web site
	or the administration Web site and you do not have a key installed, you will
	receive an "SSL required" error message when you try to view or administer the
	site from the Web interface.
	
	CAUSE
	=====
	
	The HTMLA Administration forms do not check to see if an SSL key is installed
	before allowing the box to be checked. You will receive a warning when you try
	to do this on the administration Web site, but not on any other sites, such as
	the default Web site.
	
	WORKAROUND
	==========
	
	To work around this problem, run the ADSVW utility that comes with Windows 2000.
	Follow these steps:
	
	1. Click Start, click Run, type "ADSVW" (without the quotation marks), and then
	  click OK.
	
	2. When you see the Active Directory Browser on you screen, select the
	  ObjectViewer option, and then click OK.
	
	3. For the ADs path, type "IIS://localhost" (without the quotation marks) and
	  click OK.
	
	4. When you see the Localhost entry in the left pane of the window, expand it,
	  and then double-click W3svc.
	
	5. You should now see your Web sites on the IIS computer enumerated under the
	  W3svc.
	
	6. Double-click the "1" entry (the default Web site) to expand it.
	
	7. Expand the entry for "ROOT" under "1."
	
	8. In the right-hand pane, in the "Properties" drop-down list, find the
	  "AccessSSL" setting in this list. The property value should be set at "-1" if
	  you are experiencing this problem.
	
	9. The correct setting should be "0" (zero) if SSL is not required.
	
	10. Change the setting to "0" (zero) under the property value (be sure the
	  property on the left is set to AccessSSL), and then click Apply.
	
	11. This change should take place immediately.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
