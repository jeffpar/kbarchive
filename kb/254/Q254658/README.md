---
layout: page
title: "Q254658: Problems Using ISM (HTML) to Create &amp; View Virtual Directory"
permalink: /kb/254/Q254658/
---

## Q254658: Problems Using ISM (HTML) to Create &amp; View Virtual Directory

	Article: Q254658
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the browser-based Internet Services Manager (ISM) to create a
	virtual directory that uses an extended character in its name, the following
	problems occur:
	
	- The Local path text box is blank.
	- The Read, Log visits, and Index this resource check boxes are not selected
	  (checked).
	- A Web application based on the virtual directory does not appear to have been
	  created (although it actually has been created).
	- The Execute permissions and Application Protection drop-down lists are too
	  small, and are not populated.
	
	WORKAROUND
	==========
	
	Use the IIS snap-in version of the ISM to correctly view and modify the
	settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	
	Additional query words: iis 5 webadmin web admin htmla vdir symbol foreign character akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
