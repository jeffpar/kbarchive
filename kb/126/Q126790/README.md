---
layout: page
title: "Q126790: PC Win: Err Msg: Not Enough Memory or System Resources..."
permalink: kb/126/Q126790/
---

## Q126790: PC Win: Err Msg: Not Enough Memory or System Resources...

	Article: Q126790
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a message with Microsoft Mail for Windows, you may get the
	following error message:
	
	  Not enough memory or system resources to save changes.
	
	CAUSE
	=====
	
	When Mail is trying to send a message, it also tries to write the changes to
	your mail message file (.MMF). If there is corruption in the your .MMF, you may
	get the above error.
	
	The above error can also occur if the Mail client is left open, and Microsoft
	Windows is exited. Some third-party network redirectors release the net
	connections before all applications have terminated.
	
	RESOLUTION
	==========
	
	To repair the corruption in your .MMF, follow the procedure below:
	
	1. Run Mail.
	
	2. From the Mail menu, choose Options.
	
	3. From the Options dialog box, select the Server button.
	
	4. Under Server Options, change the location of the message file from Postoffice
	  to Local (for example, C:\MSMAIL.MMF). Click OK.
	
	5. Click OK at the Options dialog box.
	
	6. Exit and Sign-out of Mail.
	
	7. Run the CHKMMF procedure by holding down the SHIFT key while you click the OK
	  button (or press ENTER) after you type the mailbox name and password.
	
	  NOTE: Hold down the Shift key until a dialog box appears with the following
	  text:
	
	  Do you want to have your message file checked for possible inconsistencies?
	  Any problems found in the message file will be corrected. Verification may
	  take up to several hours depending on the number of messages you have in your
	  message file.
	
	8. Select the Check file button.
	
	9. Follow steps 2 through 4.
	
	10. Under Server Options, change the location of the message file from Local to
	  Postoffice. Click OK.
	
	11. Click OK at the Options dialog box.
	
	If you exited Microsoft Windows leaving Mail open, you should always exit and
	sign out of Mail before ending the Microsoft Windows session.
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
