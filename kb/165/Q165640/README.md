---
layout: page
title: "Q165640: HOWTO: Customize the Comment and Uncomment Strings in VFP"
permalink: /kb/165/Q165640/
---

## Q165640: HOWTO: Customize the Comment and Uncomment Strings in VFP

{% raw %}

	Article: Q165640
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article shows how you can add a custom Comment and Uncomment string in
	Visual FoxPro 5.0 or 6.0. The default Comment sting is *!*. To place a Comment
	string in a text file, open the text file, right-click, and choose Comment.
	
	MORE INFORMATION
	================
	
	Currently there is no way to customize the Comment and Uncomment string in
	Visual FoxPro 5.0 or 6.0 other than doing it through the registry setting. The
	registry entry that is needed to customize the Comment and Uncomment string is
	called "EditorCommentString" and must be located in the
	HKEY_CURRENT_USER\Software\Microsoft\Visual FoxPro\5.0\Options. In Visual FoxPro
	6.0, the "EditorCommentString" must be located in
	HKEY_CURRENT_USER\Software\Microsoft\Visual FoxPro\6.0\Options.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	The following steps show you how you set up your own customize Comment and
	Uncomment string:
	
	In Windows 95 and Windows NT 4.0
	--------------------------------
	
	1. Run the registry (Regedit.exe) editor.
	
	2. Click the HKEY_CURRENT_USER key and navigate down the tree until you reach
	  the \Options key.
	
	3. From the Edit menu pad, click New and select String Value from the registry
	  editor menu, and type in the new key as "EditorCommentString' (without the
	  quotes).
	
	4. From the Edit menu, click Modify, or double-click the key and specify the
	  following value in the Edit String window including the asterisk:
	
	        * NOTE *
	
	5. Click OK in the Edit String window, then choose the Registry menu pad and
	  Exit to quit.
	
	In Windows NT 3.51
	------------------
	
	1. Run the registry (Regedt32.exe) editor.
	
	2. Choose the HKEY_CURRENT_USER window and navigate down the tree until you
	  reach the \Options key.
	
	3. Click the Edit menu and click Add Value from the registry editor menu,
	  specify "EditorCommentString" (without the quotes) as the Value Name and
	  leave the default data type of REG_SZ.
	
	4. When you click OK, another window appears in which you can specify your
	  customize comment string, such as the following (including the asterisk):
	
	        * NOTE *
	
	5. Click the Registry menu and select Exit to quit.
	
	NOTE: Be sure to Restart Visual FoxPro in order for the changes to take effect.
	To restore the default setting of *!*, delete the "EditorCommentString" key.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
