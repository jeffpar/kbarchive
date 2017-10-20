---
layout: page
title: "Q131742: DLL Files in the HyperTerminal Folder"
permalink: /kb/131/Q131742/
---

## Q131742: DLL Files in the HyperTerminal Folder

{% raw %}

	Article: Q131742
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you open the HyperTerminal folder, you may see the following files in
	addition to the HYPERTERM.EXE file and any previously created connectoids:
	
	- HTICONS.DLL
	
	- HYPERTRM.DLL
	
	MORE INFORMATION
	================
	
	If you have selected the Show All Files option for the HyperTerminal window, all
	the files in the folder are displayed, regardless of their extensions. If you do
	not want to see these files, follow these steps:
	
	1. On the View menu, click Options.
	
	2. Click the View tab.
	
	3. Click the Hide Files Of These Types option button.
	
	4. Click OK.
	
	CAUTION: Do not remove the DLL files. Doing so will cause HyperTerminal to not
	function.
	
	The DLL files in the HyperTerminal folder have the following functions:
	
	  File           Function
	  ------------------------------------------------
	  HTICONS.DLL    Contains the connectoid icons
	  HYPERTRM.DLL   Is the main DLL for HyperTerminal
	
	Additional query words: terminal hyperterm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
