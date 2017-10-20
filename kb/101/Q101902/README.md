---
layout: page
title: "Q101902: PC WRmt: Multiple Address List Downloads Cause Corruption"
permalink: /kb/101/Q101902/
---

## Q101902: PC WRmt: Multiple Address List Downloads Cause Corruption

{% raw %}

	Article: Q101902
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you download the postoffice address lists in Mail Remote for Windows two or
	more times in the same session (that is, without exiting and restarting Mail
	Remote), the external postoffice address lists on your hard disk may become
	corrupted.
	
	You can avoid this problem by only downloading the postoffice address lists once
	during a Mail Remote session. If you only use Mail Remote for Windows (and no
	other type of Mail) and you leave your computer running continually, you should
	exit and sign out of Mail after each session (especially if you download the
	address list during that session).
	
	After the second download of the address list, when you open the Global Address
	List (GAL) and request Details on an External user, the following error message
	appears:
	
	  A GLB file on your server is corrupt. Contact your system administrator.
	
	The external postoffice's address list shows no names defined on that postoffice.
	This is true for all external postoffices.
	
	If you send a mail message to the external user by using the GAL for addressing,
	no message is sent. The SESSION.LOG file reports the following messages:
	
	  No mail to send
	
	  Tsk 5, Ec -1,
	  ResetModem on error!
	  ReversePump on error!
	
	NOTE: You must add the following two lines to the [SFS Remote] section of the
	workstation's MSMAIL.INI file in order to see the messages shown above. These
	settings provide additional diagnostic information that is recorded in the
	SESSION.LOG file.
	
	  Verbose=1
	  Debuglog=1
	
	If the upload is aborted, the message is returned as undeliverable and the
	following message appears:
	
	  A message recipient was not supplied. The recipient has been deleted or has
	  no e-mail address.
	
	If you send mail to both a local postoffice user and an external postoffice user,
	the message is only sent to the local user. However, no error message indicating
	a failure to deliver to the External user is reported.
	
	CAUSE
	=====
	
	If the address list is updated only once per session, the corruption does not
	occur. The second download of the address list causes the address name files
	(*.NME) to be renamed to a higher sequence number; however, the Windows Remote
	client is still seeking the original filename. Manually renaming the files to
	the correct filename does not work, because the .GLB files relating to the GAL
	are also incorrect.
	
	RESOLUTION
	==========
	
	There are two ways to repair the corrupt address lists:
	
	- Exit and re-enter Mail Remote for Windows and download the address lists
	  again. This builds the files with the proper filenames.
	
	-or-
	
	- Have the Mail administrator generate a new Data disk and use this disk to
	  restore the directories. To do this, choose Options from the Mail menu.
	  Choose Server, then specify the disk drive containing the Data disk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. This problem was corrected in MSRMTUI.DLL version
	3.2.0.4001. If you do not have version 3.2.0.4001 (or later), you can download
	MSRMTUI.EXE, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MSRMTUI.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MSRMTUI.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MSRMTUI.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	For more information about how to obtain this Application Note, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q103946 Mail Remote MSRMTUI.DLL Update
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
