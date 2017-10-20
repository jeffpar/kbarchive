---
layout: page
title: "Q192105: HOWTO: Programmatically Creating and Building a Project"
permalink: /kb/192/Q192105/
---

## Q192105: HOWTO: Programmatically Creating and Building a Project

{% raw %}

	Article: Q192105
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how you can use the Project Object to programmatically
	create and build a project.
	
	MORE INFORMATION
	================
	
	Occasionally there is a need to create a project for files that already exist.
	You can now use the Project Object methods to programmatically create and build
	a project. The following steps describe how to accomplish this.
	
	Steps to Programmatically Create and Build a Project
	----------------------------------------------------
	
	1. Create a Project directory, C:\MyProj, and the sub-directories under this
	  directory, for example data, forms, reports, classes, and programs.
	
	2. Create and populate a table, that contains the names of the sub- directories
	  and type of files in them, as following:
	
	        CREATE TABLE ProjInf (DirName c(10), extName c(3))
	        INSERT INTO ProjInf VALUES ('data','dbc')
	        INSERT INTO ProjInf VALUES ('data','dbf')
	        INSERT INTO ProjInf VALUES ('forms','scx')
	        INSERT INTO ProjInf VALUES ('reports','frx')
	        INSERT INTO ProjInf VALUES ('classes','vcx')
	        INSERT INTO ProjInf VALUES ('prgs', 'prg')
	
	  Save the table to the project directory. The table fields can be changed to
	  reflect the project directory tree and the type of files in the respective
	  sub-directories.
	
	3. Copy or create all the project files, like data files, forms, reports, and
	  classes, and place them in their respective sub-directories.
	
	4. Create and save a program, in the project directory, with the following
	  code:
	
	        ********Top of Code********
	        ***************************
	        #DEFINE PROJROOT 'c:\myproj'   && Specify Project root directory.
	        && The preceding can be changed to reflect the actual root directory.
	
	        SET DEFAULT TO PROJROOT     && Select Project root directory.
	        defdir = SYS(5) + CURDIR()  && Save Project directory information.
	
	        CREATE PROJECT myproj NOSHOW NOWAIT  && Create the project.
	        curProj=_VFP.ACTIVEPROJECT   && Get ActiveProject Object reference.
	
	        use ProjInf  && Open Table with directory and extension information.
	        scan         && Scan the table.
	        AddFile(defDir, DirName,extName)   && Add files.
	        endscan
	
	       **Set the Main program.
	        msgrtrn=messagebox("Select the Main Project File",4)
	        if msgrtrn=6
	           curProj.SETMAIN(getfile( "*","File Name","Select",1,;
	                       "Select Main File"))
	        endif
	
	        curProj.CLOSE
	
	        **Function that adds files to the project.
	        FUNCTION addfile
	           PARAMETERS dDir, fDir, fExt
	
	           SET DEFAULT TO (dDir+fDir)   && Select the file directory.
	           DirStat = ADIR(dAry,'*.'+fExt)   && Get all files in directory.
	           IF DirStat != 0
	              FOR i = 1 TO ALEN(dAry,1)
	                 curProj.FILES.ADD(dAry(i,1)) && Add files to Project.
	              ENDFOR
	           ELSE
	               WAIT WIND fext+"Specified Files Not in "+;
	                  (upper(fDir)+" Directory"
	           ENDIF
	           SET DEFAULT TO (dDir)   && Select Project directory.
	        RETURN
	        ********End of Code********
	        ***************************
	
	5. Running the code in the previous step creates and populates a new project.
	
	Additional query words: kbVFp600 kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
