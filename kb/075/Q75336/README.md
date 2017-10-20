---
layout: page
title: "Q75336: SAMPLE: ScrolDlg.exe - Scrolling Dialog Box"
permalink: /kb/075/Q75336/
---

## Q75336: SAMPLE: ScrolDlg.exe - Scrolling Dialog Box

{% raw %}

	Article: Q75336
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbDlg kbGrpDSUser kbOSWin310 kbWndw kbWndwProp kbOSWin300
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ScrolDlg.exe contains a sample application that displays a scrolling dialog box.
	The procedure to define a scrolling dialog box is quite straightforward. It is
	done by specifying the WS_VSCROLL and WS_HSCROLL window styles. The dialog
	procedure must set the scroll range and process horizontal and vertical
	scrolling messages. Windows will process the WM_PAINT message on behalf of the
	dialog box.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ScrolDlg.exe
	  (http://download.microsoft.com/download/win31/samp5/1/W31/EN-US/scroldlg.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbDlg kbGrpDSUser kbOSWin310 kbWndw kbWndwProp kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
