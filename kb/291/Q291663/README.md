---
layout: page
title: "Q291663: Error Message When Distribute Software Wizard Used"
permalink: kb/291/Q291663/
---

## Q291663: Error Message When Distribute Software Wizard Used

	Article: Q291663
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbMMC kbsms200bug kbCollections kbsmsAdmin kbsmsUtil kbSoftwareDist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Administrator Microsoft Management Console (MMC) snap-in, an error
	message may be reported in the Distribute Software Wizard if you right-click a
	particular computer that contains the name "union", click All Tasks, and then
	click Distribute Software. Then, in the wizard, when you select the option to
	create a new collection that contains the word "union" as part of the computer
	name, the automatically generated collection name contains the word "union", as
	expected. However, you may receive the following error message:
	
	  Internal Error:
	  An internal error occurred during the operation of this Wizard. For debugging
	  information, press the More Information button. Please exit the wizard.
	
	When you click More Information, a message box may be displayed that can provide
	debugging information about this error.
	
	WORKAROUND
	==========
	
	To work around this problem, instead of accepting the generated name that
	contains the word "union" in the Distribute Software Wizard, select a different
	name for this collection in the New Collection Name dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbConfig kbMMC kbsms200bug kbCollections kbsmsAdmin kbsmsUtil kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
