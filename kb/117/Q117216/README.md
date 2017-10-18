---
layout: page
title: "Q117216: File Search User-Defined Function (UDF) Example"
permalink: kb/117/Q117216/
---

## Q117216: File Search User-Defined Function (UDF) Example

	Article: Q117216
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FileFind() user-defined function (UDF), shown below, uses the ADIR()
	function to locate a file starting from a particular location on the hard disk
	drive.
	
	MORE INFORMATION
	================
	
	PROCEDURE FILEFIND
	
	     PROCEDURE FILEFIND
	     * WARNING: If the user has a directory structure 32+ levels deep,
	     * this program will crash.
	     * This procedure will recursively search a specified directory and
	     * its subdirectories for a particular file and if found return the
	     * location from the root directory. If the file is not found, the
	     * message "FILE NOT FOUND!" will be displayed. Wildcard characters
	     * are not supported.
	     * Example of how to call this function is :
	     * TempVariable=FileFild("Customer.dbf","C:")
	
	     PARAMETER FILE, CUR_DIR
	     filefound = " "
	     IF RIGHT((cur_dir),1) = "\"
	          cur_dir=substr(cur_dir,1,len(cur_dir)-1)
	     ENDIF
	     =filesrch(file,cur_dir)
	     IF EMPTY(filefound)
	          filefound = "FILE NOT FOUND!"
	     ENDIF
	     RETURN UPPER(filefound)
	
	     FUNCTION FILESRCH
	     *
	     * This is the recursive part of the program. This function will
	     * search the specified directory and call itself again if needed to
	     * search a subdirectory.
	
	     PARAMETER FILENAME, CURDIR
	     PRIVATE filename, curdir, temp_dir, i, j  && Private variables needed
	     * curdir is the current directory.        && for recursion to work.
	     * filename is the file being searched for.
	     DIMENSION temp_dir(1,1)
	     temp_dir(1,1)=" "
	     =ADIR(temp_dir,curdir+"\"+FILENAME)
	     IF ASCAN(temp_dir,UPPER(filename)) != 0   && Search current directory
	          filefound=curdir + "\"+ UPPER(filename)
	          RETURN TO filefind                  && IF file found, end program
	     ENDIF
	     =ADIR(temp_dir,curdir+"\*.","D")          && Get subdirectories
	     IF temp_dir(1,1) != " " AND filefound =" "&& Search subdirectories
	          IF temp_dir(1,1)="."                 && Look at first subdirectory
	               IF ALEN(temp_dir,1)=2         && Possibly no subdirectories
	                    RETURN
	               ENDIF
	               i=3
	          ELSE
	               i=1
	          ENDIF
	          FOR j = i TO ALEN(temp_dir,1)  && Start searching subdirectories
	               curdir=curdir+"\"+temp_dir(j,1)
	               =filesrch(filename,curdir)      && Recursive call
	               curdir=SUBSTR(curdir,1,RAT("\",curdir)-1)
	          ENDFOR
	     ENDIF
	     RETURN
	
	Additional query words: VFoxWin FoxDos FoxWin search find locate
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
