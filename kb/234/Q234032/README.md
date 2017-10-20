---
layout: page
title: "Q234032: XCLN: Suggestions for Configuring OWA for 640 X 480 Resolutions"
permalink: /kb/234/Q234032/
---

## Q234032: XCLN: Suggestions for Configuring OWA for 640 X 480 Resolutions

{% raw %}

	Article: Q234032
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Outlook Web Access (OWA) is optimized to run best using browsers with
	screen resolutions of 800 X 600 or higher. You can view OWA using a smaller
	screen resolution and still see the entire screen using scroll bars. However, by
	making some modifications to variables within the scripts used for OWA, you may
	more easily use OWA on a 640 X 480 screen resolution.
	
	Be sure to replicate ANY changes to each language pack you have installed, and in
	the case of files like Title.asp and Main_fr.asp, replicate the change to the
	Inbox, Calendar, Contacts, and Public Folder files as well.
	
	MORE INFORMATION
	================
	
	Controlling the Size of the Windows
	-----------------------------------
	
	Search the Logon.asp file for openNewWindow. The last two parameters in this call
	set the size of the new window (the default is 600 X 500).
	
	Controlling the Size of the Frames
	----------------------------------
	
	Top Level:
	
	Root.asp: L_OutlookBar_FRAME_Width_Number sets the width of the navigational bar.
	You can turn scrolling off in the navigational bar to save additional space.
	
	Nested Frames:
	
	- Main_fr.asp: Controls the size of the toolbar and width of the folder list.
	  L_Title_FRAME_Height_Number = 85 adjusts height of title frame.
	  L_Folder_FRAME_Width_Number = 156 adjusts width of folder frame.
	
	- Title.asp: Change the location of the form field viewSelect to the same cell
	  as bstrFolderName. If needed, reduce the font size of bstrFolderName.
	
	- Nbinbox.asp (or Nbanon.asp for anonymous users): You may change the display
	  size of all the icons and fonts to make all of them fit the height of your
	  screen.
	
	  img src=logoff.gif width=32 height=32 alt=Log Off border=0 br clear=all
	  div align=center font =bstrFace size=2 color=White Log Off font div a
	
	Change Find Names to Find to save even more space.
	
	- Many formatting defaults can be changed in Getrend.inc.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
