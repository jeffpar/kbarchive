---
layout: page
title: "Q62122: Mac Hyp: Logging In to a Microsoft Mail Account"
permalink: kb/062/Q62122/
---

## Q62122: Mac Hyp: Logging In to a Microsoft Mail Account

	Article: Q62122
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command logs on to a Microsoft Mail version 2.00 account using the
	specified user name and password:
	
	     msmail(logOn, name [,password])
	
	In Mail version 3.00, there is added the optional parameter of "session":
	
	     msmail(logOn, name [, password][, session])
	
	A user with this name must exist on the currently connected server. If that user
	has a password, it must also be correctly specified. If a password is not
	specified and the user has a password, the function will fail.
	
	Both Mail 2.00 and Mail 3.00 support two independent sessions, one used by the
	"Workstation" (desk accessory [DA]) and a secondary "Application" ("stack" in
	this case) session. With Mail 3.00 when using the default ("Application") and
	with Mail 2.00, if the logOn request succeeds, all future msmail calls will
	apply to this user's mailbox. (The Application takes precedence over the
	Workstation session for all calls, except as noted below.)
	
	A logOn call does not ordinarily affect the status of the Mail DA; if the user
	has signed on using the DA, a logOn or logOff call will not disconnect the user.
	With Mail 3.00 using the "Workstation" session parameter, the Workstation must
	not have an active session. To log off the active session, use the function
	ChooseServer -- it automatically terminates any active mail session.
	
	
	MORE INFORMATION
	================
	
	It is not usually necessary to log on from HyperCard. By default, the msmail
	function will use the same mailbox that the Mail user is logged in to.
	
	If you have already made a logOn call, a subsequent logOn call will automatically
	override the previous logOn call.
	
	Note: Problems may arise if both HyperCard and the DA are accessing the same
	mailbox and if getMessageList or displayMessageCenter calls are made while the
	Mail DA is displaying its message center. In such cases, the DA's message list
	may not be updated correctly when changes occur.
	
	Note also that displayMessageCenter will not function properly in Mail 2.00 if
	the account selected by logOn is different than the account that the DA is
	currently logged in to. Microsoft has confirmed this to be a problem in Mail
	2.00. This problem was corrected in Mail 3.00.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
