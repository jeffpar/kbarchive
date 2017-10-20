---
layout: page
title: "Q117390: SUBST Fails on Removable Media"
permalink: /kb/117/Q117390/
---

## Q117390: SUBST Fails on Removable Media

{% raw %}

	Article: Q117390
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SUBST command on a removable drive, you do not have access to
	the substituted drive in Windows 95 (not even at an MS-DOS prompt within Windows
	95).
	
	CAUSE
	=====
	
	The SUBST command fails in real mode and protected mode when used on removable
	media controlled by non-INT13h controllers.
	
	STATUS
	======
	
	The SUBST command is not supported on drives that are controlled by non- INT13h
	controllers. You do have access to the removable drive, but you do not have
	access to the substituted drive.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
