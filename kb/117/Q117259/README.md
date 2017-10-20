---
layout: page
title: "Q117259: PC Adm: Err: Modifying Mailbox Name Causes Notice 34 &amp; 127"
permalink: /kb/117/Q117259/
---

## Q117259: PC Adm: Err: Modifying Mailbox Name Causes Notice 34 &amp; 127

{% raw %}

	Article: Q117259
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IMPORT utility (IMPORT.EXE) included with versions 3.0 and 3.2
	of Microsoft Mail for PC Networks to modify a local postoffice user's mailbox
	name, the user will receive the following error when he or she logs in to the
	MS-DOS client:
	
	  Notice 34 Could not access log information file.
	
	Furthermore, if this modified user tries to access any MS-DOS client folders, he
	or she will receive the following error message:
	
	  Notice 127 Private Folder Index Missing.
	
	The user will not be able to access, store mail in, or view his or her private
	MS-DOS folders.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name    Version
	  --------------------
	  Import.exe   3.2.8
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	WORKAROUND
	==========
	
	To work around this problem, the mail administrator must use the Microsoft Mail
	Administrator program to modify the user (by selecting Local Admin, Modify) and
	accept all the default values for the user (it is not necessary to change any of
	the values).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	versions 3.0 and 3.2.
	
	MORE INFORMATION
	================
	
	The following is an example of the import text file (which modifies the local
	user) that causes this problem to occur:
	
	  M BeforeAfter            PCM:net/po/before
	    BeforeAfter            PCM:net/po/after
	
	The IMPORT.EXE command line would be:
	
	  n:\mailexe\import.exe admin -ppassword -fimport.txt -gpcm -d<drive>
	
	Additional query words: 3.00 3.20 MS-DOS client Import modify Admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
