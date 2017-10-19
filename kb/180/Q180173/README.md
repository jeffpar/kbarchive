---
layout: page
title: "Q180173: PRB: &quot;The profile name is not valid&quot; with MAPISession Control"
permalink: /kb/180/Q180173/
---

## Q180173: PRB: &quot;The profile name is not valid&quot; with MAPISession Control

	Article: Q180173
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling the SignOn method of the MAPISession control, the following error
	may occur:
	
	  The profile name is not valid. Enter a valid profile name.
	
	CAUSE
	=====
	
	The LogonUI property of the MAPISession control is set to True and the UserName
	property of the control contains an invalid profile name.
	
	RESOLUTION
	==========
	
	Either set the UserName property of the MAPISession control equal to a profile
	name that exists on the machine before the SignOn method of the control is
	called, or leave the UserName property empty.
	
	If the UserName property is empty and the SignOn method is called, a Choose
	Profile dialog box may appear. This dialog box contains all the profiles
	currently available.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The MAPI 1.0 specification requires a profile to log on to a messaging session.
	The MAPISession control was written before the MAPI 1.0 specification was
	established. In order to use this control to establish a MAPI 1.0 session and
	prevent the Choose Profile dialog from showing, the UserName property must be
	used to pass the name of the profile needed to sign on.
	
	Additional query words: msmapi32.ocx vbmapi kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport 
	kbVBp kbMapi
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	
