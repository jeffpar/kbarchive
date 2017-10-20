---
layout: page
title: "Q80319: BUG: Cannot Bind Programs that Increase the Number of Files"
permalink: /kb/080/Q80319/
---

## Q80319: BUG: Cannot Bind Programs that Increase the Number of Files

{% raw %}

	Article: Q80319
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs that have been linked with the modified startup code that allows more
	than 15 open files will cause BIND.EXE to issue the following error:
	
	  bv3.obj(bindv3) : error L2029: 'DOSSETMAXFH' : unresolved external
	
	RESOLUTION
	==========
	
	Programs that increase the number of open files cannot be bound.
	
	To increase the number of available open files under OS/2 involves calling the
	OS/2 API DOSSETMAXFH. This API is not mapped during the binding process to the
	equivalent MS-DOS interrupt 21h, function 67h.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in FORTRAN, version 5.1.
	
	This is not an issue in FORTRAN Powerstation.
	
	MORE INFORMATION
	================
	
	The following code is a good sample program to test how many files can be open
	at the same time. Compile with the following command line:
	
	  fl /Fb /Lp a.for unit crt0dat /link /noe
	
	where UNIT.OBJ and CRT0DAT.OBJ are OS/2 startup code modules that have be
	modified to increase the number of file handles.
	
	Sample code
	-----------
	
	  character*12 buffer
	
	        do i=1, 10000
	         write(buffer,'(i5,a)') i,'.dat'
	         write(*,*) 'Filename is: ', buffer
	         open(i,file=buffer,err=100,iostat=ierr)
	        end do
	
	  100   write(*,*) 'Error was: ',ierr
	
	        do j=1,i
	         close(j,status='delete')
	        end do
	
	        end
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510OS2
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
