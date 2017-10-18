---
layout: page
title: "Q118340: QuickWin Apps Allowed 50 User-Added Menu Items"
permalink: kb/118/Q118340/
---

## Q118340: QuickWin Apps Allowed 50 User-Added Menu Items

	Article: Q118340
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FORTRAN QuickWin applications can have only 50 user-added menu items.
	
	MORE INFORMATION
	================
	
	Attempting to create more than 50 new menu items using AppendMenuQQ or
	InsertMenuQQ fails (functions return FALSE). The additional menu items beyond 50
	are not created.
	
	To demonstrate the restriction, compile and run the sample code below. When
	asked, request 51 menu items. You'll notice a "T" by menu items up to item 50
	indicating success, but "F" for item 51, indicating failure. Therefore, only the
	items "Menutest1" through "Menutest50" are added to the application menus.
	
	Sample Code
	-----------
	
	  C compile options needed: /MW
	
	        include 'flib.fi'
	        include 'flib.fd'
	
	        character*11 name
	        external menutest
	
	        write(*,"(' How many menus to create?',\)")
	        read *,n
	
	        do m = 1,n
	          write(name,"('Menutest',i2.2,a)")m,char(0)
	          print *,appendmenuqq(m/10+1,$MENUENABLED,name,menutest),m
	        end do
	
	        read *
	        END
	
	        subroutine menutest(L)
	        logical L
	        print *, 'Checked=',L
	        end
	
	Additional query words: kbinf 1.00 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	
	=============================================================================
	
