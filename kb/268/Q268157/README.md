---
layout: page
title: "Q268157: Error Message: &quot;19128-Location Under MA Is Wrong [OU=xx,o=yy]&quot;"
permalink: kb/268/Q268157/
---

## Q268157: Error Message: &quot;19128-Location Under MA Is Wrong [OU=xx,o=yy]&quot;

	Article: Q268157
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg metadirectory MMS
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.2, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a provisioning agent on your computer, you may receive a generic
	"19128-Location Under MA Is Wrong [OU=xx,o=yy]" error message in the Ds.log
	file.
	
	In the log file, you may receive a detailed version of the preceding error
	message which can resemble the following error message:
	
	  19128-Location under MA is wrong [OU=marketing,OU=Test
	  ICL,NC=XForestRoot.com,ma=ADMA,DsaName=xforestdc,ou=Applications,
	  dc=wrong,dc=com]
	
	  19128-Error 19128 loading resource [res=HR-Prov,f=Together
	  Administration,ou=Applications,dc=Meta,dc=com]
	
	  Summary for [ma=ADMA,DsaName=xforestdc,ou=Applications,dc=Meta,dc=com]
	  Number of entries processed: 7
	  Number of record(s) excluded: 2
	
	  Number of connector(s) exist before: 5
	
	  ******* Reference of return codes *******
	  ERROR 19128: DS_RC_IMPROPER_POLICY
	
	CAUSE
	=====
	
	This behavior may occur because of the following conditions:
	
	- Management Agent (MA) configuration: in the "location under MA" section in
	  the Properties action, the complete distinguished name, rather than the
	  Relative Distinguished Name (RDN) components of the object, must be listed.
	  In this situation, the error message is displayed in a dialog box in Compass.
	
	- Account profile: one or more resources named in the account profile cannot be
	  located, probably because the resource no longer exists.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must verify the following items to be true:
	
	1. The complete distinguished name of the object (to which the resource is being
	  applied) is listed in the "Location under the MA" dialog box. To verify this
	  listing, perform the following steps:
	
	  a. Using Compass, click Bookmarks.
	
	  b. Click Applications.
	
	  c. Double-click the Together Administration folder.
	
	  d. Select the appropriate resource in the right-hand window.
	
	  e. Click Properties.
	
	  f. Click the Resource Information tab.
	
	  g. Verify that the contents of the Location Under MA (Optional) dialog box
	     contain the correct and complete distinguished name of the object in the
	     metaverse below which the new objects should be created. If it does not,
	     click "Select a location" to drag a valid distinguished name into this
	     field.
	
	2. For every resource listed in the profile, the resource exists in the
	  metadirectory exactly as specified.
	
	MORE INFORMATION
	================
	
	For more information about the provisioning agent, read the "Setting up TAMA"
	topic in the online MMS Active Directory Management Agent Administration manual.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg metadirectory MMS 
	Technology        : kbMMSSearch
	Version           : :2.2
	Issue type        : kbprb
	
	=============================================================================
	
