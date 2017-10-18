---
layout: page
title: "Q167023: Windows NT Workstation Sends SMB Request Continuously"
permalink: kb/167/Q167023/
---

## Q167023: Windows NT Workstation Sends SMB Request Continuously

	Article: Q167023
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user with administrator privileges from the accounts domain logs on to a
	computer running Windows NT Workstation 4.0. The workstation is in the resource
	domain. If the user connects to a share on the Primary Domain Controller (PDC)
	of the resource domain through Windows Explorer or Network Neighborhood,
	right-clicks a directory in the share, selects the security tab and selects
	permissions, the workstation begins to loop. File Manager can be used to connect
	to the shared directory in question. Querying the security information will
	produce the same symptoms. This loop is not detectable through the UI of the
	workstation or the server. It is only detected through a network analyzer trace.
	The same packets are continuously sent between the workstation and server until
	the Windows Explorer dialog boxes are closed.
	
	CAUSE
	=====
	
	The workstation continuously requests a notify change for the shared directory
	that it connected to, and the server will respond with INVALID USER IDENTIFIER
	ERROR (91). The application, Windows Explorer, indicates that change notify
	completed successfully and resubmits a subsequent change notify request. The
	workstation continues to send the "notify change" request and the server
	continues to respond with the error message. This loop will continue until the
	user on the workstation cancels the operation by closing Network Neighborhood or
	Windows Explorer. This problem only occurs the first time that a user performs
	the operation in question. If the user shuts down Windows Explorer and tries
	again, the extra packets are not produced. The workstation must be restarted.
	
	WORKAROUND
	==========
	
	To work around this problem, explicitly establish a connection to the server
	through Net use \\servername\ipc$.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below or wait for the next Windows NT service pack.
	Rdr.sys has been fixed. A failure indication is returned to the application,
	Windows Explorer, in the case of the change notify query. As a result, the
	application does not submit a subsequent change notify request.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
