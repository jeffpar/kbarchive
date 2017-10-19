---
layout: page
title: "Q102124: Mac Srv: Microsoft Mail Remote Resource Protocol Errors"
permalink: /kb/102/Q102124/
---

## Q102124: Mac Srv: Microsoft Mail Remote Resource Protocol Errors

	Article: Q102124
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks Macintosh
	workstation communicates with the Microsoft Mail Server via Microsoft Remote
	Resource Protocol (MRRP) calls.
	
	MORE INFORMATION
	================
	
	The following are possible error codes that may be returned regarding a
	condition on the workstation and on the server. You may see these error codes in
	the Gateway Installer, Gateway Services Monitor, and errors reported to the
	Network Manager by gateways and other places.
	
	Workstation Related Errors
	--------------------------
	
	msmDErrUnknownRequest         -3000    The driver doesn't recognize this
	                                      request
	
	msmDErrNoMailServers          -2999    No mail servers can be found
	
	msmDErrNotLoggedOn            -2998    The user is not logged on
	
	msmDErrUnknownUser            -2997    The username given is unknown to the
	                                      server
	
	msmDErrTooBig                 -2996    Reserved for PC Use
	
	msmDErrNoGWS                  -2995    No gateway services available
	
	msmDErrOutgoingTooBig         -2994    Outgoing message too big
	
	msmDErrMultipleServers        -2993    Multiple servers found
	
	msmDErrNoServerChosen         -2992    No server chosen
	
	msmDErrIncompatibleServer     -2991    Server is incompatible with driver
	
	msmDErrBadString              -2990    Bad string passed to driver function
	
	msmDErrNoPCRam,               -2989    PC Client only
	
	msmDErrLangMismatch,          -2988
	
	msmDErrLostServer,            -2987
	
	msmDErrNotReentrant,          -2986
	
	msmDErrNoOfflineResources,    -2985
	
	msmDErrNoCacheFile,           -2984
	
	msmDErrNoLocalFolderFile,     -2983
	
	msmDErrLocalFolderFileMunged  -2982
	
	msmDErrOffline                -2981    Driver is offline, can't complete
	                                      request
	
	msmDErrFolderLocation         -2979    Can't create folder in that location
	
	msmTErrUnknownUser            -2500    No match or multiple match for user
	                                      name
	
	msmTErrNeverSent              -2499    The message has not been sent to the
	                                      server
	
	msmTErrCancelled              -2498    The user hit the cancel button
	
	msmTErrNoAsnElem              -2497    The message is missing a required
	                                      field
	
	Server Related Errors
	---------------------
	
	msmSErrUnknownRequest         -5000    The server doesn't recognize this
	                                      request
	
	msmSErrNotLoggedOn            -4999    The user is not logged into this
	                                      server
	
	msmSErrNoStore                -4998    The server is out of memory
	
	msmSErrNoDisk                 -4997    The server is out of disk space
	
	msmSErrNotFound               -4996    The server can't find a requested
	                                      resource
	
	msmSErrDataRead               -4995    The server failed on a disk read
	
	msmSErrEOD                    -4994    Attempted access out of resource
	                                      bounds
	
	msmSErrServerFull             -4993    Server is full
	
	msmSErrNoUserList             -4800    The message is missing a userlist
	                                      (ULIS)
	
	msmSErrBadAsn                 -4799    The message is malformed
	
	msmSErrNoAsnElem              -4798    The message is missing a required
	                                      field
	
	msmSErrDemoLimited            -4797    Failed because the server is a demo
	                                      server
	
	msmSErrUnknownUser            -4600    The server does not recognize this
	                                      user
	
	msmSErrBadPassword            -4599    The user gave a bad password
	
	msmSErrBadCreate              -4598    This user couldn't be created
	
	msmSErrUserExists             -4597    This user already exists
	
	msmSErrNotAllowed             -4596    User is not Network Manager
	
	msmSErrNoDelSysMgr            -4595    Attempted to delete Network Manager
	
	msmSErrUserHasMail            -4594    Tried to delete user with mail
	
	msmSErrBadGuess               -4593    Resource ID already in use
	
	msmSErrListNotFound           -4397    Indexed resource not found
	
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
