---
layout: page
title: "Q230110: Default Newsgroups Installed with NNTP Server"
permalink: /kb/230/Q230110/
---

## Q230110: Default Newsgroups Installed with NNTP Server

	Article: Q230110
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following newsgroups are automatically installed with the NNTP server:
	
	- Control.cancel
	- Control.newgroup
	- Control.rmgroup
	- Microsoft.public.ins
	
	The Microsoft.public.ins newsgroup is a sample newsgroup that contains a welcome
	message. It can be used to immediately test if messages can successfully be
	posted and read on the NNTP Server. You can delete this newsgroup if you want.
	
	The control.* newsgroups work in conjunction with the control messages generated
	by NNTP client software, NNTP utilities, and NNTP servers. Deleting these
	newsgroups will interfere with the proper operation of these control messages.
	
	MORE INFORMATION
	================
	
	For more information about control messages, see the "Processing Control
	Messages" topic in the online product documentation at this example URL:
	
	  http://localhost/iishelp/news/noc05%5F14.htm
	
	Additional query words: remove uninstall akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
