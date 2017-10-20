---
layout: page
title: "Q299007: Memory Leak Triggering Event to an eMbedded Visual Basic Program"
permalink: /kb/299/Q299007/
---

## Q299007: Memory Leak Triggering Event to an eMbedded Visual Basic Program

{% raw %}

	Article: Q299007
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Triggering events to an eMbedded Visual Basic program can cause a memory leak.
	
	CAUSE
	=====
	
	This issue occurs because a string is allocated for the event function name but
	is never released.
	
	RESOLUTION
	==========
	
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later.
	
	  
	  +----------------------------------------------+
	  | Name              | Date       | Version     | 
	  +----------------------------------------------+
	  | Finance.dll       | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEComDlg.dll    | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEComm.dll      | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEFile.dll      | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEGrid.dll      | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEImage.dll     | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEImageList.dll | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEListView.dll  | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEMenuBar.dll   | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEPicture.dll   | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCETabStrip.dll  | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCETreeView.dll  | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | MSCEWinSock.dll   | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | Pdm.dll           | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | PVBCtrl.exe       | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | PVBDecl.dll       | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | PVBForm2.dll      | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | PVBHost2.dll      | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | PVBKill.exe       | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | PVBLoad.exe       | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	  | Vbrmon.dll        | 10/26/2001 | 3.00.0.0665 | 
	  +----------------------------------------------+
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: eVB
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCEETKSearch kbWinCESearch kbWinCETK100VB600 kbWinCEETK300VB
	Version           : :1.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
